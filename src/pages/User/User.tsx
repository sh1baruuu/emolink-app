import { IonButton, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Menu from './Menu';

interface Props{

}

const User: React.FC<Props> = () => {


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
                <IonContent className="ion-padding">Tap the button in the toolbar to open the menu.</IonContent>
            </IonPage>  
        </>
    )
}

export default User