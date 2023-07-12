import { IonContent, IonPage } from '@ionic/react'
import './Meet.scss'

const Meet: React.FC =  () => {

    return (
        <IonPage>
                <IonContent fullscreen>
                    <div className="meet-container">
                        <div className="your-cam"></div>
                        <div className="remote"></div>
                    </div>
                </IonContent>
        </IonPage>
    )
}

export default Meet