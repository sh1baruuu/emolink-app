import { 
    IonInput, 
    IonButton, 
} from '@ionic/react';
import './Signup.scss';
import InputErrorMessage from '../../components/InputErrorMessage';


interface Props {
    email: string,
    password: string,
    confirm: string,
    onChange: (e: any)=>void,
    previous: ()=>void,
    emailErr: any,
    passwordErr: any
}


const StepThree: React.FC<Props> = ({email, password,  confirm, onChange, previous, emailErr, passwordErr}) => {

    return (
        <>
            <IonInput
                shape='round'
                type="email"
                fill="outline"
                label='Email address'
                labelPlacement='floating'
                name='email'
                value={email}
                onIonInput={onChange}>
            </IonInput>
            <InputErrorMessage message={emailErr} />
            <IonInput
                shape='round'
                type="password"
                fill="outline"
                label='Password'
                labelPlacement='floating'
                name='password'
                value={password}
                onIonInput={onChange}>
            </IonInput>
            <InputErrorMessage message={passwordErr} />
            <IonInput
                shape='round'
                type="password"
                fill="outline"
                label='Confirm password'
                labelPlacement='floating'
                name='confirm'
                value={confirm}
                onIonInput={onChange}>
            </IonInput> 
            <IonButton type="submit" shape="round" expand="full" size="large" className="submit">
                Sign Up
            </IonButton>
            <IonButton type="button" color='medium' fill='outline' shape="round" expand="full" size="large" className="previous"  onClick={previous}>
                Previous
            </IonButton>
        </>
    )
}

export default StepThree;