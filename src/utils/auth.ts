import { sendPasswordResetEmail } from "firebase/auth"
import { auth } from "./firebase"



// FOR RESET PASSWORD

export const onResetPassword = async (email: string): Promise<string | undefined> => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    try{
        await sendPasswordResetEmail(auth, email);
        
        return "reset email sent"

    } catch(error: any){
        if (email === '') {
                return 'Please enter your email address.'
            } else if (error.code === 'auth/invalid-email' || !emailRegex.test(email)) {
                return 'Invalid email format.'
            } else if (error.code === 'auth/user-not-found') {
                return 'User not found.'
            } else if (error.code === 'auth/too-many-requests') {
                return 'Too may requests. Please try again later.'
            } else {
                return error.code || error.message
            }
    }
}

// FOR SIGN UP PAGE