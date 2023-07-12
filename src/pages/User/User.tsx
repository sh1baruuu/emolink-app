import { IonContent, IonPage } from "@ionic/react"

interface Props{

}

const User: React.FC<Props> = () => {


    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="user-container">
                    
                </div>
            </IonContent>
        </IonPage>
    )
}

export default User