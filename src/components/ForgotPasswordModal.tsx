import {
    IonText, 
    IonIcon,  
    IonButtons, 
    IonButton, 
    IonItem, 
    IonModal, 
} from '@ionic/react';
import './components.scss';
import { useState } from 'react';
import { onResetPassword } from '../utils/forgotPassword.utils';
import { ForgotPasswordModalProps } from '../utils/interface';
import { key } from 'ionicons/icons';



const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = (props) => {

    const [email, setEmail] = useState("")

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const result = await onResetPassword(email)

        alert(result)
    }


    return (
        <IonModal 
            isOpen={props.isOpen} 
            className='modal-container'
            onDidDismiss={props.toggle}
        >
            <div>
                <IonText class="forgot-password-txt">
                    <IonIcon className='icon' icon={key} size='large' ></IonIcon>
                    <h1>Forgot Password?</h1>
                    <p>
                        Enter your email address below and we will
                        <br/>
                        send you a link to reset your password
                    </p>
                </IonText>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name='email'
                        onChange={(e:any)=>{setEmail(e.target.value)}}
                        placeholder="Email adress"
                        value={email}
                    />
                    <IonItem lines="none">
                        <IonButtons slot="start">
                            <IonButton type='button' color="medium" onClick={props.toggle}>
                                Cancel
                        </IonButton>
                        </IonButtons>
                        <IonButtons slot="end">
                            <IonButton type='submit' className='button'>
                                Confirm
                            </IonButton>
                        </IonButtons>
                    </IonItem>
                </form>
            </div>
        </IonModal>
    );
};

export default ForgotPasswordModal;
