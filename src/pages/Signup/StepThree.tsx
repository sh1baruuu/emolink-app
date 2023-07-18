import { 
    IonInput, 
    IonButton,
    IonLabel, 
} from '@ionic/react';
import './Signup.scss';
import InputErrorMessage from '../../components/InputErrorMessage';


interface Props {
    email: string,
    password: string,
    confirm: string,
    onChange: (e: any)=>void,
    onFocus: ()=>void,
    previous: ()=>void,
    emailErr: any,
    passErr: any,
    confErr: any,
    isButtonDisable: boolean
}


const StepThree: React.FC<Props> = ({email, password,  confirm, onChange, onFocus, previous, emailErr, passErr, confErr, isButtonDisable}) => {

    return (
        <>
            <IonInput
                className={emailErr ? 'error' : ''}
                id='error'
                shape='round'
                autocomplete='off'
                type="email"
                fill="outline"
                label='Email address'
                labelPlacement='floating'
                name='email'
                value={email}
                onIonInput={onChange}
                onIonFocus={onFocus}
            >
            </IonInput>
            <InputErrorMessage message={emailErr} />
            <IonInput
                className={passErr ? 'error' : ''}
                shape='round'
                autocomplete='off'
                type="password"
                fill="outline"
                label='Password'
                labelPlacement='floating'
                name='password'
                value={password}
                onIonInput={onChange}
                onIonFocus={onFocus}
            >
            </IonInput>
            <InputErrorMessage message={passErr} />
            <IonInput
                className={confErr ? 'error' : ''}
                shape='round'
                autocomplete='off'
                type="password"
                fill="outline"
                label='Confirm password'
                labelPlacement='floating'
                name='confirm'
                value={confirm}
                onIonInput={onChange}
                onIonFocus={onFocus}
            >
            </IonInput> 
            <InputErrorMessage message={confErr} />
            <IonButton type="submit" shape="round" expand="full" disabled={isButtonDisable} size="large" className="submit">
                Sign Up
            </IonButton>
            <IonButton type="button" color='medium' fill='outline' shape="round" expand="full" size="large" className="previous"  onClick={previous}>
                Previous
            </IonButton>
        </>
    )
}

export default StepThree;