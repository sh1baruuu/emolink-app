import { IonLabel } from '@ionic/react'
import './components.scss'

interface Props {
    message: string
}

const EmptyMessage: React.FC<Props> = ({ message }) => {

    return (
        <span className='empty-message column'>
            <IonLabel>{message}</IonLabel>
        </span>
    )
}

export default EmptyMessage