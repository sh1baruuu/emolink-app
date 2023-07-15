import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonIcon, IonImg, IonAvatar, IonButton } from "@ionic/react"
import Menu from "../Menu"
import { ellipsisVertical, helpCircleSharp, notifications } from "ionicons/icons"
import avatar from '../../../assets/avatar.jpeg'
import './Dashboard.scss'
import { useHistory } from 'react-router'

const Dashboard: React.FC = () => {
    const history = useHistory()

    return (
        <>
            <Menu />
            <IonPage id="main-content">
                    <IonHeader className="ion-no-border">
                        <IonToolbar className="toolbar" >
                            <IonButtons slot="start">
                                <IonMenuButton></IonMenuButton>
                            </IonButtons>
                            <IonButton slot="end" fill='clear' onClick={()=>alert("hi")}>
                                <IonIcon icon={helpCircleSharp}></IonIcon>
                            </IonButton>
                            <IonButton slot="end" fill='clear' onClick={()=>alert("hi")}>
                                <IonIcon icon={notifications}></IonIcon>
                            </IonButton>
                            <IonButton slot="end" fill='clear' onClick={()=>alert("hi")}>
                                <IonIcon slot="icon-only" icon={ellipsisVertical}></IonIcon>
                            </IonButton>
                            <IonAvatar slot='end' onClick={()=>{history.push('/profile')}}>
                                <IonImg src={avatar} alt=''></IonImg>
                            </IonAvatar>
                        </IonToolbar>
                    </IonHeader>
                <IonContent fullscreen className='main'>
                        <div className="container">
                            <h1>Home</h1>
                            <div className="cont-one"></div>
                            <div className="cont-two"></div>
                        </div>
                </IonContent>
                
            </IonPage>  
        </>
    )
}

export default Dashboard