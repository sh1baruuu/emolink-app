import { auth } from './firebase';
import { AuthError, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

export interface FormData { email: string, password: string}

export const useFormData = (): [FormData, React.Dispatch<React.SetStateAction<FormData>>] => {
    const [formData, setFormData] = useState<FormData>({ email: '', password: '' });

    return [formData, setFormData];
};

const [rememberMe, setRememberMe] = useState(false)
const [forgotPasswordIsOpen, setForgotPasswordIsOpen] = useState(false)
const [emailError, setEmailError] = useState("")
const [passwordError, setPasswordError] = useState("")
const [submitLoader, setSubmitLoader] = useState(false)
const [formData, setFormData] = useFormData();
const { email, password } = formData;

export const onSignIn = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    setSubmitLoader(true)

    try {
        await signInWithEmailAndPassword(auth, email, password)

        alert('Logged in')

        
        setFormData({ email: '', password: '' })

    } catch (error: AuthError | any) {
        if (email === '') {
        setEmailError('Please enter your email address.')
        } else if (error.code === 'auth/invalid-email' || !emailRegex.test(email)) {
        setEmailError('Invalid email format.')
        } else if (error.code === 'auth/user-not-found') {
        setEmailError('User not found.')
        } else if (error.code === 'auth/missing-password') {
        setPasswordError('Please enter your password.')
        } else if (password.length < 8) {
        setPasswordError('Password should be at least 8 characters long.')
        } else if (error.code === 'auth/wrong-password') {
        setPasswordError('Incorrect password.')
        } else if (error.code === 'auth/user-disabled') {
        setEmailError('Your account has been disabled. Please contact support.')
        } else if (error.code === 'auth/too-many-requests') {
        setEmailError('Too many attempt. Please try again later.');
        } else {
        setEmailError(error.code);
        }
    }
    setSubmitLoader(false)
}