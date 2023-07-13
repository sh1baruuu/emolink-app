import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from "@ionic/react"
import Menu from "../Menu"


const Dashboard: React.FC = () => {

    return (
        <>
            <Menu />
            <IonPage id="main-content">
                <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                    <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    Tap the button in the toolbar to open the menu.
                </IonContent>
            </IonPage>  
        </>
    )
}

export default Dashboard