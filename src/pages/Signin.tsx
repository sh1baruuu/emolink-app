import { 
    IonContent,
    IonImg, 
    IonInput, 
    IonButton, 
    IonButtons, 
    IonItem, 
    IonLabel, 
    IonModal, 
    IonText, 
    IonPage, 
    IonFooter } from '@ionic/react';
import './Signin.scss';
import { useState } from 'react';
import logo from '../assets/logoV2.png'
import { onSignIn } from '../utils/onSign'

const SignIn: React.FC = () => {
    
    interface FormData { email: string, password: string};

    const data = { email: '', password: '' };
    const [formData, setFormData] = useState<FormData>(data);

    const { email, password } = formData;


    function handleOnInput(e: any) {
        let  {name, value} = e.target
        setFormData((prevData:FormData)=> ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = async (event: any)=>{
        event.preventDefault();
        const result = await onSignIn( email, password );
        alert(result)

        setFormData(data)
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
                        <IonButton type="button" fill="clear" size="small" className="forgotPassword" onClick={()=>{alert(email + password)}}>
                            Forgot password?
                        </IonButton>
                    </form>
                </div>
            </IonContent>

            <IonFooter className="ion-no-border">
                <p className="footer">
                    Don't have an account? <IonButton className='button' routerLink='/home' fill='clear' size='small'>SignUp</IonButton>
                </p>
            </IonFooter>
        </IonPage>
    );
};

export default SignIn;