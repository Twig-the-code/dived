import React from 'react';
import Amplify, { I18n } from 'aws-amplify';
import { Authenticator, ConfirmSignUp, VerifyContact } from 'aws-amplify-react';

import Header from './components/Header';
import Cards from './components/Cards';
import Info from './components/Info';
import getAllCards from './actions/get-all-cards';
import getAllFinishedCards from './actions/get-all-finished-cards';
import markAsFinished from './actions/mark-card-as-finished';
import markAsOpen from './actions/mark-card-as-open';

import { dictionary } from './i18n/dict';
import { fakeData } from './helpers/fakeData';
import { cards } from './helpers/cards';

import './App.css';

import config from './aws-exports';
import Setup from './components/Setup';
import Tracker from "./components/Tracker";

Amplify.configure(config);
I18n.setLanguage('fi');

const cardDict = {
  fi: {
    'Card finished': 'Valmis',
    'Card unfinished': 'Kortti',
    'filter all': 'Kaikki',
    'filter finished': 'Valmiit',
    'filter unfinished': 'Kesken',
  },
  se: {
    'Card finished': 'Färdigt',
    'Card unfinished': 'Kort',
    'filter all': 'Alla',
    'filter finished': 'Alla',
    'filter unfinished': 'Alla',
  },
};

I18n.putVocabularies(dictionary);



const wrapHOC = WrappedComponent => {
  class Wrapper extends React.PureComponent {
    componentDidUpdate(prevProps, prevState, snapshot) {
      const { authState } = this.props;

      if (authState === 'verifyContact') {
        const { onStateChange } = this.props;
        onStateChange('signedIn');
        window.location.reload();
      }
    }

    render() {
      return (
        <div>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  }

  return Wrapper;
};

const MyAuthenticatedApp = wrapHOC(Tracker);
const signUpConfig = {
  header: 'Luo tunnus DivED -seurantaan',
  hiddenDefaults: ['phone_number', 'email'],
};
const signInConfig = {
  header: 'Kirjaudu sisään',
  hiddenDefaults: ['phone_number', 'email'],
};

class MyCustomConfirmSignup extends ConfirmSignUp {
  constructor() {
    super();
    this._validAuthStates = ['signIn'];
  }

  render() {
    const { authState, authData } = this.props;
    return authState === 'confirmSignUp' ? (
      <p>
        Käyttäjän luonti onnistui! Kirjaudu sisään
        <button
          type="button"
          onClick={() => this.props.onStateChange('signIn')}
        >
          tästä
        </button>
      </p>
    ) : null;
  }
}

const AlwaysOn = (props) => {
  return (
    <div>
      <div>I am always here to show current auth state: {props.authState}</div>
      <button onClick={() => props.onStateChange('signUp')}>Show Sign Up</button>
    </div>
  )
}

const AppWithAuth = () => (
  <Authenticator
    hide={[ConfirmSignUp, VerifyContact]}
    signUpConfig={signUpConfig}
    signInConfig={signInConfig}
    amplifyConfig={config}
  >
    {/* <MyCustomSignUp override="SignUp" /> */}
    {/* <MyCustomComfirmSignUp override="ConfirmSignUp"/> */}
    <MyCustomConfirmSignup />
    <MyAuthenticatedApp onVerify={Authenticator.changeState} />
    <AlwaysOn/>
  </Authenticator>
);

export default AppWithAuth;

// export default withAuthenticator(App, { signUpConfig })
