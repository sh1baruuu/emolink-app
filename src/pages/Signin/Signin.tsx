import { 
    IonContent,
    IonImg, 
    IonInput, 
    IonButton, 
    IonPage, 
    IonFooter, 
    IonLoading} from '@ionic/react';
import './Signin.scss';
import { useContext, useState } from 'react';
import logo from '../../assets/logoV2.png';
import { onSignIn } from '../../utils/signin';
import ForgotPasswordModal from '../../components/ForgotPasswordModal';
import { SignInData } from '../../utils/interface';
import { useHistory } from 'react-router'
import { UserDataContext } from '../../context/UserDataContext';

const SignIn: React.FC = () => {
    const history = useHistory()
    const data = { email: '', password: '' };
    const [formData, setFormData] = useState<SignInData>(data);
    const { email, password } = formData;
    const { signinUser } = useContext(UserDataContext)
    const handleOnInput = (e: any) => {
        let  {name, value} = e.target
        setFormData((prevData:SignInData)=> ({
            ...prevData,
            [name]: value
        }))
    }
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: any)=>{
        event.preventDefault();
        setIsLoading(true)
        const res = await onSignIn( email, password );
        setIsLoading(false)
        if (res.uid !==''){
            signinUser(res.uid)
            history.push('/user', {uid: res.uid})
        }
        setFormData(data)
        
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(prevState => !prevState)
    }

    
    return (
        <IonPage>
            <IonLoading
                isOpen={isLoading}
                onDidDismiss={() => setIsLoading(false)}
                message={'Signing in...'}
            />
            <IonContent fullscreen>
                <div className="sign-container column">
                    <IonImg className='logo' src={logo} alt=''></IonImg>
                    <h1>Log In Now</h1>
                    <p>Please login to continue our app</p>
                    <form onSubmit={handleSubmit} >
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
                        <IonButton type="submit" shape="round" expand="full" size="large" className="submit">
                            Log In
                        </IonButton>
                        <IonButton type="button" onClick={toggleModal} fill="clear" size="small" className="forgotPassword">
                            Forgot password?
                        </IonButton>
                    </form>
                </div>
                <ForgotPasswordModal isOpen={isModalOpen} toggle={toggleModal} />

            </IonContent>

            <IonFooter className="ion-no-border">
                <p className="footer">
                    Don't have an account? 
                    <IonButton className='button' routerLink='/signup' fill='clear' size='small'>SignUp</IonButton>
                </p>
            </IonFooter>
        </IonPage>
    )
}

export default SignIn;