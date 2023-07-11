
import { auth } from './firebase'
import { createUserWithEmailAndPassword, deleteUser, updatePassword  } from 'firebase/auth'
import { validatePassword } from './validatePassword'



export const onSignUp = async (email:string, password:string, confirm: string): Promise<{uid: string, error: string}> => {

    let currentUser: any
    let id: string


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
        
        return { uid: id, error: "" }
    }
    catch(error: any){
        if (currentUser !== undefined){
            deleteUser(currentUser)
        }

        return { uid: "", error: error.message }
    }

}