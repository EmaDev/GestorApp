import { Redirect } from 'react-router-dom';
import {
  IonApp,
  isPlatform,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

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
import "./css/global.css"
/* Theme variables */
import './theme/variables.css';

import 'animate.css';
import 'react-toastify/dist/ReactToastify.css';
import { AppRouter } from './router/AppRouter';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <Redirect from='/' to="/auth/login" />
        <AppRouter />
      </IonReactRouter>
    </IonApp>
  )
};

export default App;
