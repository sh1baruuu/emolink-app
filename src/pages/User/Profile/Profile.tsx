import { IonAvatar, IonButton, IonContent, IonIcon, IonImg, IonInput, IonItem, IonItemDivider, IonLabel, IonPage } from '@ionic/react'
import './Profile.scss'
import avatar from '../../../assets/avatar.jpeg'
import { createOutline, settingsOutline } from 'ionicons/icons'
import { useHistory, useLocation, useRouteMatch } from 'react-router'
import Header from '../../../components/Header'
import { useEffect, useState } from 'react'
import { SignUpData } from '../../../utils/interface'
import { DocumentData } from 'firebase/firestore'

const Profile: React.FC = () => {
    const match = useRouteMatch()
    const location = useLocation()
    const history = useHistory()
    const state = location.state as any;
    const data = state?.user || {}
    const [user, setUser] = useState<SignUpData | DocumentData>(data)

    useEffect( ()=> {
        setUser(data)
    }, [user])

    let interestArr = user.interest
    let interest = interestArr.join(', ')

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
                            <h2>{user.firstname + ' ' + user.lastname}</h2>
                            <p>ID: {user.userId || '000000000'}</p>
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
                            <IonInput className='disabled' value={user.email} ></IonInput>
                        </IonItem>
                        <IonItem> 
                            <IonLabel position='stacked'>Firstname</IonLabel>
                            <IonInput value={user.firstname} ></IonInput>
                        </IonItem>
                        <IonItem> 
                            <IonLabel position='stacked'>Lastname</IonLabel>
                            <IonInput value={user.lastname} ></IonInput>
                        </IonItem>
                        <IonItem> 
                            <IonLabel position='stacked'>Gender</IonLabel>
                            <IonInput value={user.gender} ></IonInput>
                        </IonItem>
                        <IonItem> 
                            <IonLabel position='stacked'>Date of Birth</IonLabel>
                            <IonInput value={user.birthday} ></IonInput>
                        </IonItem>
                        <IonItem> 
                            <IonLabel position='stacked'>Interest</IonLabel>
                            <IonInput value={interest}></IonInput>
                        </IonItem>

                    </div>
                </div>
            </IonContent>                
        </IonPage>
    )
}

export default Profile