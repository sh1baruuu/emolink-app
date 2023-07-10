import { 
    IonInput, 
    IonButton, 
    IonSelect, 
    IonSelectOption,
} from '@ionic/react';
import './Signup.scss';


export interface Props {
    firstname: string,
    lastname: string,
    isVolunteer: boolean,
    onChange: (e: any)=>void;
    next: ()=>void;
}


const StepOne: React.FC<Props> = ({firstname, lastname,  isVolunteer, onChange, next}) => {

    return (
        <>
        <IonInput
            shape='round'
            type="text"
            fill="outline"
            label='Firstname'
            labelPlacement='floating'
            name='firstname'
            value={firstname}
            onIonInput={onChange}>
        </IonInput>
        <IonInput
            shape='round'
            type="text"
            fill="outline"
            label='Lastname'
            labelPlacement='floating'
            name='lastname'
            value={lastname}
            onIonInput={onChange}>
        </IonInput>
        
        <IonSelect fill='outline' name='isVolunteer' value={isVolunteer ? "true" : "false"} onIonChange={onChange} shape='round' className='selection' label="Are you volunteer?" labelPlacement="floating">
            <IonSelectOption value='true'>Yes</IonSelectOption>
            <IonSelectOption value='false'>No</IonSelectOption>
        </IonSelect>
        <IonButton type="button" shape="round" expand="full" size="large"  onClick={next} className="next">
            Next
        </IonButton> 
        </>
    )
}

export default StepOne;