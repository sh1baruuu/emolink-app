import './Chats.scss'
import Header from '../../../components/Header'
import { IonPage, IonContent } from '@ionic/react'
import EmptyMessage from '../../../components/EmptyMessage'


const Chats: React.FC = () => {

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="chats-container column">
                    <Header title='Chats' bordered />
                    <div className='container column'>
                        <EmptyMessage message='Your messages will display here' />
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Chats