import { 
    IonContent,
    IonImg, 
    IonInput, 
    IonButton, 
    IonPage, 
    IonSelect, 
    IonSelectOption,
    IonFooter, 
    IonDatetime,
    IonModal,} from '@ionic/react';
import './Signup.scss';
import { useState } from 'react';
import logo from '../../assets/logoV2.png';
import { onSignIn } from '../../utils/onSign';
import { SignUpData, userData } from '../../utils/interface';

const SignUp: React.FC = () => {

    const [sent, setSent] = useState(false)
    const [firstnameError, setFirstnameError] = useState("")
    const [lastnameError, setLastnameError] = useState("")
    const [genderError, setGenderError] = useState("")
    const [birthdayError, setBirthdayError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError ] = useState("")
    const [confirmPasswordError, setConfirmPasswordError ] = useState("")




    const [showDatePicker, setShowDatePicker] = useState<boolean>(false)
    const [step, setStep] = useState<number>(2)
    const userData: SignUpData = {
        userId: "",
        firstname: "",
        lastname: "",
        gender: "",
        dateOfBirth: "",
        interest: [],
        isVolunteer: false,
        email: "",
        password: "",
        confirm: ""
    }
    const [userFormData, setUserFormData] = useState<SignUpData>(userData)

    const { userId,
            firstname,
            lastname,
            gender,
            dateOfBirth,
            interest,
            isVolunteer,
            email,
            password, 
            confirm
    } = userFormData



    const handleDateChange = (event: CustomEvent) => {
        const newDate = event.detail.value
        // setDate(newDate)
        handleDatePicker()
    };

    const handleOnInput = (e: any) => {
        let {name, value} = e.target
        setUserFormData((prevData:SignUpData) => ({
            ...prevData,
            [name]: value
        }))
    }

    

    const handleDatePicker = () => {
        setShowDatePicker((prevState:boolean) => !prevState)
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        const result = await onSignIn( email, password )
        alert(result)

        setUserFormData(userData)
    }

    
    function goToStep(num: number, next:boolean){
        const message = 'This field cannot be empty'
        if ( next && step === 1){
            if (firstname === ""){
                setFirstnameError(message)
            }
            if (lastname === ""){
                setLastnameError(message)
            }
            if (gender === ""){
                setGenderError(message)
            }
            { firstname && lastname && gender && setStep(2)}
        } else if ( next && step === 2){
            if (dateOfBirth === ""){
                setBirthdayError(message)
            }
            { dateOfBirth && setStep(num)}
        } else if (!next && step === 2){
            setStep(num)
        } else {
            setStep(num)
        }
    }

    const handleSelection = (event: any) => {
        let { name, value} = event.target
        setUserFormData((prev:SignUpData)=>({
            ...prev, [name]: value === 'true'}
        ))
    }

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="sign-container column">
                    <IonImg className='logo' src={logo} alt=''></IonImg>
                    <h1>Sign Up Now</h1>
                    <p>Please signup to continue our app</p>
                    <form onSubmit={handleSubmit} >
                        { step === 1 && <>
                            <IonInput
                                shape='round'
                                type="text"
                                fill="outline"
                                label='Firstname'
                                labelPlacement='floating'
                                name='firstname'
                                value={userFormData.firstname}
                                onIonInput={handleOnInput}>
                            </IonInput>
                            <IonInput
                                shape='round'
                                type="text"
                                fill="outline"
                                label='Lastname'
                                labelPlacement='floating'
                                name='lastname'
                                value={userFormData.lastname}
                                onIonInput={handleOnInput}>
                            </IonInput>
                            
                            <IonSelect fill='outline' value={userFormData.isVolunteer ? "true" : "false"} onIonChange={handleOnInput} shape='round' className='selection' label="Are you volunteer?" labelPlacement="floating">
                                <IonSelectOption value='true'>Yes</IonSelectOption>
                                <IonSelectOption value='false'>No</IonSelectOption>
                            </IonSelect>
                            <IonButton type="button" shape="round" expand="full" size="large"  onClick={()=>goToStep(2, true)} className="next">
                                Next
                            </IonButton> </>
                        }
                        { step === 2 && <>
                            <IonSelect fill='outline' value={userFormData.gender} shape='round' className='selection' label="Gender" labelPlacement="floating">
                                <IonSelectOption value="male">Male</IonSelectOption>
                                <IonSelectOption value="female">Female</IonSelectOption>
                                <IonSelectOption value="other">Other</IonSelectOption>
                            </IonSelect>
                            <IonInput
                                readonly
                                shape='round'
                                fill="outline"
                                label='Birthday'
                                labelPlacement='floating'
                                name='birthday'
                                value={userFormData.dateOfBirth}
                                onClick={handleDatePicker}
                            >
                            </IonInput>
                            <IonModal isOpen={showDatePicker} className='date-modal' keepContentsMounted={true}>
                                <div className='column'>
                                    <IonDatetime 
                                        id="datetime"
                                        presentation='date'
                                        value={userFormData.dateOfBirth}
                                        onIonChange={handleDateChange}
                                        >
                                    </IonDatetime>
                                </div>
                            </IonModal>
                            <IonSelect 
                                fill='outline' 
                                shape='round' 
                                className='selection' 
                                label="Interest" 
                                multiple={true}
                                value={userFormData.interest}
                                labelPlacement="floating">
                                    <IonSelectOption value="male">Male</IonSelectOption>
                                    <IonSelectOption value="female">Female</IonSelectOption>
                                    <IonSelectOption value="other">Other</IonSelectOption>
                            </IonSelect>
                            <IonButton type="button" shape="round" expand="full" size="large" className="next"  onClick={()=>goToStep(3, true)}>
                                Next
                            </IonButton> 
                            <IonButton type="button" color='medium' fill='outline' shape="round" expand="full" size="large" className="previous"  onClick={()=>goToStep(2, false)}>
                                Previous
                            </IonButton> 
                        </>
                        }

                        { step === 3 && <>
                            <IonInput
                                shape='round'
                                type="email"
                                fill="outline"
                                label='Email address'
                                labelPlacement='floating'
                                name='email'
                                value={email}
                                onIonInput={handleOnInput}>
                            </IonInput>
                            <IonInput
                                shape='round'
                                type="password"
                                fill="outline"
                                label='Password'
                                labelPlacement='floating'
                                name='password'
                                value={password}
                                onIonInput={handleOnInput}>
                            </IonInput>
                            <IonInput
                                shape='round'
                                type="password"
                                fill="outline"
                                label='Confirm password'
                                labelPlacement='floating'
                                name='confirm'
                                value={confirm}
                                onIonInput={handleOnInput}>
                            </IonInput> 
                            <IonButton type="submit" shape="round" expand="full" size="large" className="submit">
                                Sign Up
                            </IonButton>
                            <IonButton type="button" color='medium' fill='outline' shape="round" expand="full" size="large" className="previous"  onClick={()=>goToStep(2, false)}>
                                Previous
                            </IonButton></>
                        }

                        
                    </form>
                </div>

            </IonContent>

            <IonFooter className="ion-no-border">
                <p className="footer">
                    Already have an account? 
                    <IonButton className='button' routerLink='/signin' fill='clear' size='small'>SignIn</IonButton>
                </p>
            </IonFooter>
        </IonPage>
    );
};

export default SignUp;