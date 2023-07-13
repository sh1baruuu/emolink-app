import { IonAvatar, IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonItemDivider, IonLabel, IonNavLink, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import './Profile.scss'
import avatar from '../../../assets/avatar.jpeg'
import { arrowBackOutline, createOutline, settingsOutline } from 'ionicons/icons'
import { useState } from 'react'
import { useHistory } from 'react-router'

const Profile: React.FC = () => {

    const history = useHistory()

    return (
        <IonPage>
            <IonContent scrollEvents={true}>
                <div className='profile-container column'>
                    <div className='card column'>
                        <IonHeader className='ion-no-border sticky-header'>
                            <IonToolbar >
                                <IonButton slot='start' fill='clear' shape='round' routerLink='/user'>
                                    <IonIcon slot='' icon={arrowBackOutline}></IonIcon>
                                </IonButton>
                                <IonTitle>
                                    Profile
                                </IonTitle>
                                <IonButton slot='end' fill='clear' shape='round' >
                                    <IonIcon slot='' icon={settingsOutline}></IonIcon>
                                </IonButton>
                            </IonToolbar>
                        </IonHeader>
                        <IonAvatar>
                            <IonImg src={avatar} alt='' ></IonImg>
                        </IonAvatar>
                        <span className='desc'>
                            <h2>Rudolph De Villa</h2>
                            <p>ID: 123456780</p>
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
                            <IonButton fill='clear' onClick={()=>history.push('/edit')} color='dark' slot='end'size='large'>
                                <IonIcon icon={createOutline} ></IonIcon>
                            </IonButton>
                        </IonItemDivider>
                        <IonItem> 
                            <IonLabel position='stacked'>Email</IonLabel>
                            <IonInput className='disabled' value='20-06346@g.batstate-u.edu.ph' ></IonInput>
                        </IonItem>
                        <IonItem> 
                            <IonLabel position='stacked'>Firstname</IonLabel>
                            <IonInput value='Rudolph' ></IonInput>
                        </IonItem>
                        <IonItem> 
                            <IonLabel position='stacked'>Lastname</IonLabel>
                            <IonInput value='De Villa' ></IonInput>
                        </IonItem>
                        <IonItem> 
                            <IonLabel position='stacked'>Gender</IonLabel>
                            <IonInput value='Male' ></IonInput>
                        </IonItem>
                        <IonItem> 
                            <IonLabel position='stacked'>Date of Birth</IonLabel>
                            <IonInput value='2005-03-56' ></IonInput>
                        </IonItem>
                        <IonItem> 
                            <IonLabel position='stacked'>Interest</IonLabel>
                            <IonInput value='Interest1, Interest2, Interest3' ></IonInput>
                        </IonItem>

                    </div>
                </div>
            </IonContent>                
        </IonPage>
    )
}

export default Profile