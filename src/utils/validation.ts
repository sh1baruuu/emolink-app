import { HandlePasswordError } from "./interface";


const handleEmailError = async  (error: any): Promise<string> => {
    if (error.code === 'auth/invalid-email') {
        return 'Invalid email format.'
    } else if (error.code === 'auth/email-already-in-use') {
        return 'The email address you entered is already in use.';
    } else if (error.code === 'auth/user-not-found') {
        return 'User not found.'
    } else if (error.code === 'auth/network-request-failed') {
        return 'Please check your  internet connection and try again.'
    }
    console.log("email")
    return ''
}   

const handlePasswordError = async (error: any): Promise<HandlePasswordError> => {
    const errorObj: HandlePasswordError = {}

    if (error.message === 'pass/is-empty') {
        errorObj.passErr = 'Password cannot be empty.'
    } else if (error.code === 'auth/missing-password') {
        errorObj.passErr = 'Password cannot be empty.'
    } else if (error.code === 'auth/missing-password') {
        errorObj.passErr = 'Password cannot be empty.'
    } else if (error.code === 'auth/weak-password') {
        errorObj.passErr = 'Password should be at least 6 characters.'
    } else if (error.message === 'pass/test-failed') {
        errorObj.passErr = 'Password must contain an uppercase letter, one symbol, and one number.'
    } else if (error.message === 'pass/not-match') {
        errorObj.confErr = 'Confirm password did not match.'
    }
    console.log("password")
    return errorObj
}

const validatePassword = async (password: string, confirm: string) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/

    if (password.trim().length === 0) {
        return 'pass/is-empty'
    } else if (!passwordRegex.test(password)) {
        return 'pass/test-failed'
    } else if (password !== confirm) {
        return 'pass/not-match'
    } else {
        return 
    }
}

export { handleEmailError, handlePasswordError, validatePassword };
