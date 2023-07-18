import { IonAvatar, IonButton, IonContent, IonIcon, IonImg, IonInput, IonItem, IonItemDivider, IonLabel, IonPage } from '@ionic/react'
import { UserDataContext, UserDataDoc } from '../../../context/UserDataContext'
import { createOutline, settingsOutline } from 'ionicons/icons'
import { useHistory, useRouteMatch } from 'react-router'
import { useContext, useState, useEffect } from 'react'
import avatar from '../../../assets/avatar.jpeg'
import Header from '../../../components/Header'
import './Profile.scss'


const Profile: React.FC = () => {
    const match = useRouteMatch()
    const history = useHistory()
    const [ user, setUser] = useState<UserDataDoc>()
    const {userData} = useContext(UserDataContext)

    useEffect(()=>{
        setUser(userData)
    })

    return (
        <IonPage>
            <IonContent scrollEvents={true}>
                <div className='profile-container column'>
                    <div className='card column'>
                        <Header title='Profile' >
                                <IonButton slot='end' fill='clear' shape='round' >
                                    <IonIcon slot='' icon={settingsOutline}></IonIcon>
                                </IonButton>
                        </Header>
                        <IonAvatar>
                            <IonImg src={avatar} alt='' ></IonImg>
                        </IonAvatar>
                        <span className='desc'>
                            <h2>{user?.firstname + " " + user?.lastname}</h2>
                            <p>ID: {user?.userId}</p>
                        </span>
                        <span className='follow'>
                            <IonItem button>
                                <IonLabel>
                                </IonLabel>
                                    <h4>1240</h4>
                                    <p>Followers</p>
                            </IonItem>
                            <IonItem> 
                                |
                            </IonItem>
                            <IonItem button>
                                <IonLabel>
                                </IonLabel>
                                    <h4>235</h4>
                                    <p>Following</p>
                            </IonItem>
                        </span>
                    </div>
                    <IonItemDivider></IonItemDivider>
                    <div className='information column'>
                        <div className='wrapper'>   </div>
                        <IonItemDivider>
                            <IonLabel>Your Information</IonLabel>
                            <IonButton fill='clear' onClick={()=>history.push(`${match.url}/edit`)} color='dark' slot='end'size='large'>
                                <IonIcon icon={createOutline} ></IonIcon>
                            </IonButton>
                        </IonItemDivider>
                        <IonItem> 
                            <IonLabel position='stacked'>Email</IonLabel>
                            <IonInput aria-label='email' className='disabled' value={user?.email} ></IonInput>
                        </IonItem>
                        <IonItem> 
                            <IonLabel position='stacked'>Firstname</IonLabel>
                            <IonInput aria-label='firstname' value={user?.firstname} ></IonInput>
                        </IonItem>
                        <IonItem> 
                            <IonLabel position='stacked'>Lastname</IonLabel>
                            <IonInput aria-label='lastname' value={user?.lastname} ></IonInput>
                        </IonItem>
                        <IonItem> 
                            <IonLabel position='stacked'>Gender</IonLabel>
                            <IonInput aria-label='gender' value={user?.gender} ></IonInput>
                        </IonItem>
                        <IonItem> 
                            <IonLabel position='stacked'>Date of Birth</IonLabel>
                            <IonInput aria-label='birthday' value={user?.birthday} ></IonInput>
                        </IonItem>
                        <IonItem> 
                            <IonLabel position='stacked'>Interest</IonLabel>
                            <IonInput aria-label='interest' value={user?.interest.join(", ")}></IonInput>
                        </IonItem>

                    </div>
                </div>
            </IonContent>                
        </IonPage>
    )
}

export default Profile