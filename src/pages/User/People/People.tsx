import { IonPage, IonContent, IonLabel } from '@ionic/react'
import Header from '../../../components/Header'
import './People.scss'
import EmptyMessage from '../../../components/EmptyMessage'

const People: React.FC = () => {

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="chats-container column">
                    <Header title='Chats' bordered />
                    <div className='container column'>
                        <EmptyMessage message='People will show here' />
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default People