import { 
    IonInput, 
    IonButton, 
    IonSelect, 
    IonSelectOption,
    IonModal,
    IonDatetime,
} from '@ionic/react';
import './Signup.scss';


export interface Props {
    gender: string,
    birthday: string,
    interest: string[],
    onChange: (e: any)=>void,
    datePickerState: boolean,
    onDatePicker: ()=>void,
    next: ()=>void,
    previous: ()=>void,
}


const StepTwo: React.FC<Props> = ({gender, birthday,  interest, onChange, datePickerState, onDatePicker, next, previous}) => {

    return (
        <>
            <IonSelect fill='outline' value={gender} shape='round' className='selection' label="Gender" labelPlacement="floating">
                <IonSelectOption value="male">Male</IonSelectOption>
                <IonSelectOption value="female">Female</IonSelectOption>
                <IonSelectOption value="other">Non-Binary</IonSelectOption>
            </IonSelect>
            <IonInput
                readonly
                shape='round'
                fill="outline"
                label='Birthday'
                labelPlacement='floating'
                value={birthday.slice(0, 10)}
                onClick={onDatePicker}
            >
            </IonInput>
            <IonModal isOpen={datePickerState} className='date-modal' keepContentsMounted={true}>
                <div className='column'>
                    <IonDatetime 
                        id="datetime"
                        presentation='date'
                        name='dateOfBirth'
                        value={birthday}
                        onIonChange={onChange}
                        >
                    </IonDatetime>
                </div>
            </IonModal>
            <IonSelect 
                fill='outline' 
                shape='round' 
                className='selection' 
                label="Interest" 
                name='interest'
                multiple={true}
                value={interest}
                onIonChange={onChange}
                labelPlacement="floating">
                    <IonSelectOption value="interestOne">One</IonSelectOption>
                    <IonSelectOption value="interestTwo">Two</IonSelectOption>
                    <IonSelectOption value="interestThree">Three</IonSelectOption>
            </IonSelect>
            <IonButton type="button" shape="round" expand="full" size="large" className="next"  onClick={next}>
                Next
            </IonButton> 
            <IonButton type="button" color='medium' fill='outline' shape="round" expand="full" size="large" className="previous"  onClick={previous}>
                Previous
            </IonButton> 
        </>
    )
}

export default StepTwo;