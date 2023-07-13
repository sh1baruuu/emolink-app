import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import './global.scss';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Pages import */
import Home from './pages/Home';
import SignUp from './pages/Signup/Signup';
import SignIn from './pages/Signin/Signin';
import Meet from './pages/Meet/Meet'
import User from './pages/User/User'
import Profile from './pages/User/Profile/Profile'
import Edit from './pages/User/Profile/Edit'
import Chats from './pages/User/Chats/Chats'
import People from './pages/User/People/People';

setupIonicReact()

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/meet" component={Meet} />
        <Route exact path="/user" component={User} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/edit" component={Edit} />
        <Route exact path="/chats" component={Chats} />
        <Route exact path="/people" component={People} />
        <Redirect exact from="/" to="/user" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
