
export interface userData {
    userId: string,
    firstname: string,
    lastname: string,
    gender: string,
    dateOfBirth: string,
    interest: string[],
    isVolunteer: boolean
}

export interface SignInData { 
    email: string, 
    password: string
}

export interface SignUpData extends userData{ 
    email: string, 
    password: string
    confirm: string
}

export interface ForgotPasswordModalProps {
    isOpen?: boolean,
    toggle?: ()=>void;
}