import { IonPage, IonContent } from '@ionic/react'
import EmptyMessage from '../../components/EmptyMessage'
import Header from '../../components/Header'
import './About.scss'



const About: React.FC = () => {

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="about-container column">
                    <Header title='About' bordered />
                    <div className='container column'>
                        <EmptyMessage message='About will display here' />
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default About