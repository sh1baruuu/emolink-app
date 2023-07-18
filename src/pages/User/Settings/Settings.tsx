import { IonPage, IonContent, IonLabel } from '@ionic/react'
import Header from '../../../components/Header'
import './Settings.scss'
import EmptyMessage from '../../../components/EmptyMessage'

const Settings: React.FC = () => {

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="chats-container column">
                    <Header title='Settings' bordered darked />
                    <div className='container column'>
                        <EmptyMessage message='Settings will show here' />
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Settings