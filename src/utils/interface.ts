
export interface UserData {
    userId: string,
    firstname: string,
    lastname: string,
    gender: string,
    dateOfBirth: string,
    interest: string[],
    isVolunteer: boolean,
    email: string, 
}

export interface SignInData { 
    email: string, 
    password: string
}

export interface SignUpData extends UserData{ 
    password: string
    confirm: string
}

export interface SignUpResponse {
    uid: string, 
    errorList: { 
        emailErr?: string, 
        passErr?: string, 
        confErr?: string
    }}

export interface ForgotPasswordModalProps {
    isOpen?: boolean,
    toggle?: ()=>void;
}

export interface HandlePasswordError{ 
    passErr?: string,
    confErr?: string 
}

