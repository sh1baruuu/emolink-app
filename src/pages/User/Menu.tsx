import { IonAvatar, IonContent, IonIcon, IonImg, IonItem, IonItemDivider, IonLabel, IonMenu } from '@ionic/react';
import './User.scss'
import avatar from '../../assets/avatar.jpeg'
import { settings, chatbubbles, documentText, informationCircle, people  } from 'ionicons/icons';
import { useEffect, useState, useContext } from 'react'
import { LinkArr } from '../../utils/interface'
import { useHistory, useLocation, useRouteMatch } from 'react-router'
import { v4 as uuid } from 'uuid';
import { UserDataContext, UserDataDoc } from '../../context/UserDataContext';



const Menu: React.FC = () => {

    const history = useHistory()
    const location = useLocation()
    const match = useRouteMatch()
    const [ user, setUser] = useState<UserDataDoc>()
    const {userData} = useContext(UserDataContext)

    useEffect(()=>{
        setUser(userData)
    })
    useEffect(() => {
        const menu: any = document.querySelector("ion-menu")
        const closeMenu = () => {
            menu.close();
        };
    
        history.listen(() => {
            closeMenu();
        });
    }, [history]);

    // useEffect(() => {
    //     const menu: any = document.querySelector("ion-menu")
    //     if (menu && location.pathname.includes("/user")) {
    //         menu.open();
    //     }

    // }, [location]);

    const linkArr: LinkArr[] =  [
        { icon: documentText  , name: "My Information", link: "/profile"},
        { icon: chatbubbles  , name: "Chats", link: '/chats'},
        { icon: people  , name: "People", link: "/people"},
        { icon: settings  , name: "Settings", link: "/settings" },
        { icon: informationCircle  , name: "About", divider: true, link: "/about"},
    ]

    const linkTo = (link: string) => {
        history.push(link)
    }

    const buttons = linkArr.map((i) => {
        

        return (
            <>
                { i.divider && <IonItemDivider className='separator'></IonItemDivider> }
                <IonItem button key={uuid()} detail lines='none' onClick={() => linkTo(i.link === "/about" ? i.link : `${match.url}${i.link}`)} >
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
                            <h6>{user?.firstname + ' ' + user?.lastname}</h6>
                            <p>ID: {user?.userId}</p>
                        </span>
                    </span>
                    {buttons}
                    
                    
                </div>
            </IonContent>
        </IonMenu>
    )
}

export default Menu
