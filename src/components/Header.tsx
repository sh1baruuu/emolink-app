import React, { ReactNode } from 'react'
import './components.scss'
import { IonHeader, IonToolbar, IonButton, IonIcon, IonTitle } from '@ionic/react'
import { arrowBackSharp } from 'ionicons/icons'

interface Props{
    title: string,
    link?: string,
    bordered?: boolean,
    children?: ReactNode
}

const Header: React.FC<Props> = ({ title, link, bordered, children }) => {

    return (
        <IonHeader className={`${ bordered ? '' : 'ion-no-border'} header`}>
            <IonToolbar >
                <IonButton slot='start' fill='clear' shape='round' routerLink={link || '/user'}>
                    <IonIcon slot='' icon={arrowBackSharp} ></IonIcon>
                </IonButton>
                <IonTitle>
                    {title}
                </IonTitle>
                { children }
            </IonToolbar>
        </IonHeader>
    )
}

export default Header