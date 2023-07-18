import { IonPage, IonContent, IonButton, IonLabel, IonSpinner } from "@ionic/react"
import Header from "../../components/Header"
import './MatchingRoom.scss'
import { useHistory } from "react-router"
import { useEffect, useState } from "react"

const MatchingRoom: React.FC = () => {
    const history = useHistory()

    const [message, setMessage] = useState<string>()

    useEffect(() => {
    setTimeout(() => {
        setMessage('Matching started...');
    }, 3000);

    setTimeout(() => {
        setMessage('Please wait...');
    }, 4000);

    setTimeout(() => {
        setMessage('Matched');
        history.push('/meet');
    }, 6000);
    }, [])
    

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="mr-container column">
                    <Header title="Match" darked={false} />
                    <div className='container column'>
                        <IonSpinner name="circles"></IonSpinner>
                        <IonSpinner name="circles"></IonSpinner>
                        <IonSpinner name="circles"></IonSpinner>
                        <IonSpinner name="circles"></IonSpinner>
                        <IonSpinner name="circles"></IonSpinner>
                        <IonSpinner name="circles"></IonSpinner>
                        {message && <IonLabel>{message}</IonLabel>}
                        <IonSpinner name="circles"></IonSpinner>
                        <IonSpinner name="circles"></IonSpinner>
                        <IonSpinner name="circles"></IonSpinner>
                        <IonSpinner name="circles"></IonSpinner>
                        <IonSpinner name="circles"></IonSpinner>
                        <IonSpinner name="circles"></IonSpinner>
                    </div>
                    <IonButton routerLink='/user' color='warning' className="stop" >Cancel</IonButton>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default MatchingRoom