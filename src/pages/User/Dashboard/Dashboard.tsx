import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonIcon, IonImg, IonAvatar, IonButton, IonActionSheet, IonRouteProps, IonPopover } from "@ionic/react"
import { ellipsisVertical, helpCircleSharp, notifications } from "ionicons/icons"
import { SignUpData, UserData } from "../../../utils/interface"
import { currentUser, onSignOut } from "../../../utils/signin"
import { getUserData } from "../../../utils/firestore"
import { useEffect, useRef, useContext, useState } from "react"
import avatar from '../../../assets/avatar.jpeg'
import { useHistory } from 'react-router'
import Menu from "../Menu"
import './Dashboard.scss'
import { UserDataContext } from "../../../context/UserDataContext"

const Dashboard: React.FC<{uid: string}> = ({uid}) => {
    const history = useHistory()
    const {signoutUser} = useContext(UserDataContext)
    const [isOption, setIsOption] = useState(false);
    const notifRef = useRef<HTMLIonPopoverElement>(null)
    const [notifOpen, setNotifOpen] = useState<boolean>(false)
    const helpRef = useRef<HTMLIonPopoverElement>(null)
    const [helpOpen, setHelpOpen] = useState<boolean>(false)


    const handleActionSheet = async (action: string) => {
        setIsOption(false)
        if (action === 'signout') {
            await onSignOut()
            signoutUser()
            history.push('/signin')
        }
    }

    const openNotif = (e: any) => {
        notifRef.current!.event = e
        setNotifOpen(true)
    }
    const openHelp = (e: any) => {
        helpRef.current!.event = e
        setHelpOpen(true)
    }

    const openActionSheet = () => {
        setIsOption(prev => !prev)
    }

    const [userData, setUserData] = useState<any>()

    useEffect(()=>{
        const data = async () => {
            const myid = currentUser()
            if (myid) {
                const myData = await getUserData(myid)
                setUserData(myData)
            }
        }

        data()
    }, [uid])


    return (
        <>
            <Menu />
            <IonPage id="main-content">
            <IonActionSheet
                mode="ios"
                isOpen={isOption}
                header="Do you want to sign out?"
                buttons={[
                {
                    text: 'SignOut',
                    role: 'destructive',
                    handler: () => handleActionSheet('signout'),
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => handleActionSheet('cancel'),
                },
                ]}
            ></IonActionSheet>
                    <IonHeader className="ion-no-border">
                        <IonToolbar className="toolbar" >
                            <IonButtons slot="start">
                                <IonMenuButton></IonMenuButton>
                            </IonButtons>
                            <IonButton slot="end" fill='clear' onClick={openHelp}>
                                <IonIcon icon={helpCircleSharp}></IonIcon>
                            </IonButton>
                            <IonButton slot="end" fill='clear' onClick={openNotif}>
                                <IonIcon icon={notifications}></IonIcon>
                            </IonButton>
                            <IonButton slot="end" fill='clear' onClick={openActionSheet}>
                                <IonIcon  icon={ellipsisVertical}></IonIcon>
                            </IonButton>
                            <IonAvatar slot='end' onClick={()=>{history.push('user/profile')}}>
                                <IonImg src={avatar} alt=''></IonImg>
                            </IonAvatar>
                        </IonToolbar>
                    </IonHeader>
                    <IonPopover ref={notifRef} isOpen={notifOpen} onDidDismiss={() => setNotifOpen(false)}>
                        <div className="container"><p>Notifications</p></div>
                    </IonPopover>
                    <IonPopover ref={helpRef} isOpen={helpOpen} onDidDismiss={() => setHelpOpen(false)}>
                        <div className="container"><p>Help</p></div>
                    </IonPopover>
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