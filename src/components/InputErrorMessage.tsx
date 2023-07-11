import { IonIcon } from '@ionic/react'
import './components.scss'
import { alertCircleOutline as warn } from 'ionicons/icons'

const InputErrorMessage: React.FC<{message:string}> = ({message}) =>{


    return (
        <>
            { message && (
                <p className="errorMessage">
                    <IonIcon className='errorIcon' icon={warn}></IonIcon>
                    {/* <FontAwesomeIcon className="errorIcon" icon={errorIcon} size='lg' shake /> */}
                    {message}
                </p>
            )}
        </>
    )
}

export default InputErrorMessage