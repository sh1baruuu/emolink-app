import { 
    IonContent,
    IonImg, 
    IonButton, 
    IonPage, 
    IonFooter,
    IonLoading,
    IonToast} from '@ionic/react'
import './Signup.scss';
import { useState } from 'react'
import logo from '../../assets/logoV2.png'
import { onSignUp } from '../../utils/signup'
import { SignUpData } from '../../utils/interface'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import { writeUserData } from '../../utils/firestore';
import { useHistory } from 'react-router';
import { generateUniqueId } from '../../utils/uid';

const SignUp: React.FC = () => {

    const history = useHistory()

    const [firstnameError, setFirstnameError] = useState("")
    const [lastnameError, setLastnameError] = useState("")
    const [genderError, setGenderError] = useState("")
    const [birthdayError, setBirthdayError] = useState("")
    const [emailError, setEmailError] = useState<string | undefined>("")
    const [passwordError, setPasswordError ] = useState<string | undefined>("")
    const [confirmError, setConfirmError ] = useState<string | undefined>("")
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false)
    const [step, setStep] = useState<number>(1)



    const userData: SignUpData = {
        userId: generateUniqueId(),
        firstname: "",
        lastname: "",
        gender: "",
        birthday: "",
        interest: [],
        isVolunteer: false,
        email: "",
        password: "",
        confirm: ""
    }
    const [userFormData, setUserFormData] = useState<SignUpData>(userData)

    const {
            firstname,
            lastname,
            gender,
            birthday,
            interest,
            isVolunteer,
            email,
            password, 
            confirm
        } = userFormData;

    const handleChange = (e: any) => {
        let {name, value} = e.target    
        setUserFormData((prevData:SignUpData) => ({
            ...prevData,
            [name]: name === 'birthday' ? value.slice(0, 10) : value
        }))
        if(name === "birthday"){
            handleDatePicker()
        }
    }

    const resetUserFormData = ()=>{
        setUserFormData(userData)
    }

    const handleDatePicker = () => {
        setShowDatePicker((prevState:boolean) => !prevState)
    }
    
    const goToStep = (num: number, next:boolean) => {
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
            if (birthday === ""){
                setBirthdayError(message)
            }
            { birthday && interest.length >= 3 && setStep(num)}
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

    
    const [buttonDisable, setButtonDisable] = useState(false)
    
    const handleInputFocus = () => {
        setEmailError('')
        setPasswordError('')
        setConfirmError('')
        setButtonDisable(false)
    }
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isRegistered, setIsRegistered] = useState(false);
    
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setIsLoading(true)
        const result = await onSignUp( email, password, confirm )

        const uid = result.uid
        const {emailErr, passErr, confErr} = result.errorList

        if(result.success){
            await writeUserData(uid, userFormData)
            resetUserFormData()
            setStep(1)
            history.push('/signin')
        } else {
            if (emailErr !== ''){
                setEmailError(emailErr)
            } else if (passErr){
                setPasswordError(passErr)
            } else if (confErr !== '') {
                setConfirmError(confErr)
            }
            setButtonDisable(true)
        }
        setIsLoading(false)
        setIsRegistered(true)
    }

    
    return (
        <IonPage>
            <IonToast
                isOpen={isRegistered}
                message="You are now registered"
                onDidDismiss={() => setIsRegistered(false)}
                duration={3000}
                position='top'
                color='light'
            ></IonToast>
            <IonLoading
                isOpen={isLoading}
                onDidDismiss={() => setIsLoading(false)}
                message={'Signing up...'}
            />
            <IonContent fullscreen>
                <div className="sign-container column">
                    <IonImg className='logo' src={logo} alt=''></IonImg>
                    <h1>Sign Up Now</h1>
                    <p>Please signup to continue our app</p>
                    <form onSubmit={handleSubmit} >

                        { step === 1 && 
                            <StepOne 
                                firstname={firstname} 
                                lastname={lastname}  
                                isVolunteer={isVolunteer} 
                                onChange={handleChange} 
                                next={()=>goToStep(2, true)}
                            /> 
                        }

                        { step === 2 && 
                            <StepTwo 
                                gender={gender} 
                                birthday={birthday}  
                                interest={interest} 
                                onChange={handleChange} 
                                onDatePicker={handleDatePicker} 
                                datePickerState={showDatePicker} 
                                next={()=>goToStep(3, true)} 
                                previous={()=>goToStep(1, false)} 
                            />
                        } 
                        
                        { step === 3 && 
                            <StepThree 
                                email={email} 
                                password={password} 
                                confirm={confirm} 
                                onChange={handleChange} 
                                previous={()=>goToStep(2, false)}
                                emailErr={emailError} 
                                passErr={passwordError}
                                confErr={confirmError}
                                onFocus={handleInputFocus}
                                isButtonDisable={buttonDisable}
                            />
                        }

                    </form>
                </div>
            </IonContent>
            <IonFooter className="ion-no-border">
                <p className="footer">
                    Already have an account? 
                    <IonButton 
                        className='button'  
                        routerLink={'/signin'} 
                        onClick={goToSignIn}  
                        fill='clear' size='small'>
                            SignIn
                    </IonButton>
                </p>
            </IonFooter>
        </IonPage>
    );
};

export default SignUp;
