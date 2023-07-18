import { IonAvatar, IonButton, IonContent, IonHeader, IonIcon, IonItem, IonItemDivider, IonLabel, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { arrowBackSharp, cameraOutline, copyOutline } from "ionicons/icons"
import './Profile.scss'
import Header from "../../../components/Header"
import { useState, useContext, useEffect } from "react"
import { UserDataDoc, UserDataContext } from "../../../context/UserDataContext"

const Edit: React.FC = () => {
    
    const [ user, setUser] = useState<UserDataDoc>()
    const {userData} = useContext(UserDataContext)

    useEffect(()=>{
        setUser(userData)
    })

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="edit-container column">
                    <Header title='Edit Profile' link='/user/profile' darked />
                    <div className="container column">
                        <IonAvatar onClick={()=>alert("Create a function for change photo")}>
                            <IonIcon icon={cameraOutline} size='large'></IonIcon>
                        </IonAvatar>
                            <IonLabel>Change photo</IonLabel>
                        <IonItemDivider>About Me</IonItemDivider>
                        <IonItem lines='none' button detail>
                            <IonLabel slot='start'>Firstname</IonLabel>
                            <IonLabel slot='end'>{user?.firstname}</IonLabel>
                        </IonItem>
                        <IonItem lines='none' button detail>
                            <IonLabel slot='start'>Lastname</IonLabel>
                            <IonLabel slot='end'>{user?.lastname}</IonLabel>
                        </IonItem>
                        <IonItem lines='none' button detail>
                            <IonLabel slot='start'>Gender</IonLabel>
                            <IonLabel slot='end'>{user?.gender}</IonLabel>
                        </IonItem>
                        <IonItem lines='none' button detail>
                            <IonLabel slot='start'>Birthday</IonLabel>
                            <IonLabel slot='end'>{user?.birthday}</IonLabel>
                        </IonItem>
                        <IonItem lines='none' button detail>
                            <IonLabel slot='start'>Bio</IonLabel>
                            <IonLabel slot='end'>Hello World!!!</IonLabel>
                        </IonItem>
                        <IonItem lines='none' button detail>
                            <IonLabel slot='start'>{user?.interest.join(", ")}</IonLabel>
                            <IonLabel slot='end'>InterestOne, InterestTwo</IonLabel>
                        </IonItem>
                        

                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Edit