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
import { onSignIn } from '../../utils/signin';
import { SignUpData } from '../../utils/interface';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';



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
    const [step, setStep] = useState<number>(1)
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

    const handleChange = (e: any) => {
        let {name, value} = e.target
        
        setUserFormData((prevData:SignUpData) => ({
            ...prevData,
            [name]: value
        }))
        if(name === "dateOfBirth"){
            handleDatePicker()
        }
    }

    const resetUserFormData = ()=>{
        setUserFormData(userData)
    }

    const handleDatePicker = () => {
        setShowDatePicker((prevState:boolean) => !prevState)
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        const result = await onSignIn( email, password )
        alert(result)
        resetUserFormData()
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
            { firstname && lastname && setStep(2)}
        } else if ( next && step === 2){
            if (gender === ""){
                setBirthdayError(message)
            }
            if (interest.length >= 3){
                setBirthdayError(message)
            }
            if (dateOfBirth === ""){
                setBirthdayError(message)
            }
            { dateOfBirth && interest.length >= 3 && setStep(num)}
        } else if (!next && step === 2){
            setStep(num)
        } else {
            setStep(num)
        }
    }

    const goToSignIn = () => {
        resetUserFormData()
        setStep(1)
    }    

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="sign-container column">
                    <IonImg className='logo' src={logo} alt=''></IonImg>
                    <h1>Sign Up Now</h1>
                    <p>Please signup to continue our app</p>
                    <form onSubmit={handleSubmit} >
                        { step === 1 && <StepOne firstname={firstname} lastname={lastname}  isVolunteer={isVolunteer} onChange={handleChange} next={()=>goToStep(2, true)}/> }
                        
                        { step === 2 && <StepTwo gender={gender} birthday={dateOfBirth}  interest={interest} onChange={handleChange} onDatePicker={handleDatePicker} datePickerState={showDatePicker} next={()=>goToStep(3, true)} previous={()=>goToStep(1, false)} /> } 
                        
                        { step === 3 && <StepThree email={email} password={password} confirm={confirm} onChange={handleChange} next={()=>goToStep(2, false)} />}
                    </form>
                </div>

            </IonContent>

            <IonFooter className="ion-no-border">
                <p className="footer">
                    Already have an account? 
                    <IonButton className='button' routerLink={'/signin'} onClick={goToSignIn}  fill='clear' size='small'>SignIn</IonButton>
                </p>
            </IonFooter>
        </IonPage>
    );
};

export default SignUp;
