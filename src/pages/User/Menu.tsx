import { IonAvatar, IonBadge, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonItemDivider, IonLabel, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './User.scss'
import avatar from '../../assets/avatar.jpeg'
import { settings, logOutOutline, chatbubbles, documentText, informationCircle, people  } from 'ionicons/icons';


interface Props{

}

const Menu: React.FC<Props> = () => {

    interface LinkArr{icon: string, name: string, divider?: boolean , link: string}

    const linkArr:LinkArr[] =  [
        { icon: documentText  , name: "My Information", link: "/user"},
        { icon: chatbubbles  , name: "Chats", link: "/"},
        { icon: people  , name: "People", link: "/signin"},
        { icon: settings  , name: "Settings", link: "/signin" },
        { icon: informationCircle  , name: "About", divider: true, link: "/signin"},
    ]

    const buttons = linkArr.map((i)=>{
        return (
            <>
                { i.divider && <IonItemDivider className='separator'></IonItemDivider> }
                <IonItem button detail lines='none' routerLink={i.link} >
                    <IonIcon icon={i.icon} slot='start'></IonIcon>
                    <IonLabel>{i.name}</IonLabel>
                </IonItem>
            </>
        )
    })


    return (
        <IonMenu contentId="main-content"> 
            <IonContent>

                <div className="menu column">
                    <span className='cont-one ion-padding'>
                        <IonAvatar slot='start'>
                            <IonImg src={avatar} alt=''></IonImg>
                            <span className='status'></span>
                        </IonAvatar>
                        <span>
                            <h6>Rudolph Angelo De Villa</h6>
                            <p>ID: 123456780</p>
                        </span>
                    </span>
                    {buttons}

                    <IonItemDivider></IonItemDivider>
                    <IonItem button detail lines='none' className='logout'>
                        <IonIcon icon={logOutOutline} slot='start'></IonIcon>
                        <IonLabel>Log out</IonLabel>
                    </IonItem>
                    
                </div>
            </IonContent>
        </IonMenu>
    )
}

export default Menu