import { 
    IonInput, 
    IonButton, 
} from '@ionic/react';
import './Signup.scss';


interface Props {
    email: string,
    password: string,
    confirm: string,
    onChange: (e: any)=>void,
    next: ()=>void
}


const StepThree: React.FC<Props> = ({email, password,  confirm, onChange, next}) => {

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
            <IonButton type="button" color='medium' fill='outline' shape="round" expand="full" size="large" className="previous"  onClick={next}>
                Previous
            </IonButton>
        </>
    )
}

export default StepThree;