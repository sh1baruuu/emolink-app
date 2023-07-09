
export interface FormData { 
    email: string, 
    password: string
}

export interface ForgotPasswordModalProps {
    isOpen?: boolean,
    toggle?: ()=>void;
}