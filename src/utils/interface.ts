
export interface UserData {
    userId: string,
    firstname: string,
    lastname: string,
    gender: string,
    birthday: string,
    interest: string[],
    isVolunteer: boolean,
    email: string, 
}

export interface SignInData { 
    email: string, 
    password: string
}

export interface SignUpData extends UserData { 
    password: string
    confirm: string
}

export interface ErrorList { 
    emailErr?: string, 
    passErr?: string, 
    confErr?: string
}

export interface SignUpResponse {
    uid: string, 
    errorList: ErrorList,
    success: boolean
}

export interface ForgotPasswordModalProps {
    isOpen?: boolean,
    toggle?: ()=>void;
}

export interface HandlePasswordError { 
    passErr?: string,
    confErr?: string 
}

export interface LinkArr {
    icon: string, 
    name: string, 
    divider?: boolean , 
    link: string
}
