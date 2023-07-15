import { 
    IonContent,
    IonImg, 
    IonInput, 
    IonButton, 
    IonPage, 
    IonFooter } from '@ionic/react';
import './Signin.scss';
import { useState } from 'react';
import logo from '../../assets/logoV2.png';
import { onSignIn } from '../../utils/signin';
import ForgotPasswordModal from '../../components/ForgotPasswordModal';
import { SignInData } from '../../utils/interface';
import { useHistory } from 'react-router'

const SignIn: React.FC = () => {
    const history = useHistory()
    const data = { email: '', password: '' };
    const [formData, setFormData] = useState<SignInData>(data);
    const { email, password } = formData;

    const handleOnInput = (e: any) => {
        let  {name, value} = e.target
        setFormData((prevData:SignInData)=> ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = async (event: any)=>{
        event.preventDefault();
        const result = await onSignIn( email, password );
        if (result==='logged'){
            history.push('/user')
        }
        setFormData(data)
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(prevState => !prevState)
    }

    
    return (
        <IonPage>
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