import { IonAvatar, IonButton, IonContent, IonHeader, IonIcon, IonItem, IonItemDivider, IonLabel, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { arrowBackSharp, cameraOutline, copyOutline } from "ionicons/icons"
import './Profile.scss'
import Header from "../../../components/Header"

const Edit: React.FC = () => {

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="edit-container column">
                    <Header title='Edit Profile' link='/profile' />
                    <div className="container column">
                        <IonAvatar onClick={()=>alert("Create a function for change photo")}>
                            <IonIcon icon={cameraOutline} size='large'></IonIcon>
                        </IonAvatar>
                            <IonLabel>Change photo</IonLabel>
                        <IonItemDivider>About Me</IonItemDivider>
                        <IonItem lines='none' button detail>
                            <IonLabel slot='start'>Firstname</IonLabel>
                            <IonLabel slot='end'>Rudolph</IonLabel>
                        </IonItem>
                        <IonItem lines='none' button detail>
                            <IonLabel slot='start'>Lastname</IonLabel>
                            <IonLabel slot='end'>De Villa</IonLabel>
                        </IonItem>
                        <IonItem lines='none' button detail>
                            <IonLabel slot='start'>Gender</IonLabel>
                            <IonLabel slot='end'>Male</IonLabel>
                        </IonItem>
                        <IonItem lines='none' button detail>
                            <IonLabel slot='start'>Birthday</IonLabel>
                            <IonLabel slot='end'>2002-11-02</IonLabel>
                        </IonItem>
                        <IonItem lines='none' button detail>
                            <IonLabel slot='start'>Bio</IonLabel>
                            <IonLabel slot='end'>Hello World!!!</IonLabel>
                        </IonItem>
                        <IonItem lines='none' button detail>
                            <IonLabel slot='start'>Interest</IonLabel>
                            <IonLabel slot='end'>InterestOne, InterestTwo</IonLabel>
                        </IonItem>
                        

                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Edit