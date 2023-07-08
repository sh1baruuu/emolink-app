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
    IonToolbar, 
    IonFooter } from '@ionic/react';
import './Signin.scss';
import { useState } from 'react';

const SignIn: React.FC = () => {
    
    interface FormData { email: string, password: string};

    const [formData, setFormData] = useState<FormData>({ email: '', password: '' });

    const { email, password } = formData;


    function handleOnInput(e: any) {
        let  {name, value} = e.target
        setFormData((prevData:FormData)=> ({
            ...prevData,
            [name]: value
        }))
    }


    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="sign-container column">
                    <h1>Log In Now</h1>
                    <p>Please login to continue our app</p>
                    <form >
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