import { IonButton, IonContent, IonImg, IonPage, IonText } from '@ionic/react';
import './Home.scss';
import logo from '../assets/logo.png';


const Home: React.FC = () => {

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='home-container column'>
          <IonText class='greet'>
            WELCOME T0
          </IonText>
          <IonImg src={logo} alt='l' class='logo'></IonImg>
          <IonText class='desc'>
            Experience the power of facial emotion recognition<br/>
            <br/>
            in our integrated video conferencing app
          </IonText>
          <IonButton
            fill='outline'
            shape='round'
            routerLink='/signin'
            className='getStarted'>
            Get started
        </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
