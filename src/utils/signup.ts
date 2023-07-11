
import { auth } from './firebase'
import { createUserWithEmailAndPassword, deleteUser, updatePassword  } from 'firebase/auth'
import { handleEmailError, handlePasswordError, validatePassword } from './validation'
import { SignUpResponse } from './interface'


export const onSignUp = async (email:string, password:string, confirm: string): Promise<SignUpResponse> => {

    let currentUser: any
    let id = ''
    let emailErr = ''
    let passErr = ''
    let confErr = ''

    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)

        const user = userCredential.user
        id = user.uid

        currentUser = auth.currentUser

        const passwordError = await validatePassword(password, confirm)
        if (passwordError){
            throw new Error(passwordError)
        } 

        await updatePassword(currentUser, confirm)
        
        return { uid: id, errorList: {} }
    }
    catch(error: any){

        if (currentUser !== undefined){
            deleteUser(currentUser)
        } 
        if (email === '') {
            emailErr = 'Please enter your email address.';
        } else {
            emailErr = await handleEmailError(error);
        }
        const errorObj = await handlePasswordError(error);
        passErr = errorObj.passErr || '';
        confErr = errorObj.confErr || '';

        return { uid: id, errorList: { emailErr, passErr, confErr } }
    }
}
