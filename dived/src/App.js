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

async function updateFinishedCards(username, comp) {
  const { done: finishedCards } = await getAllFinishedCards(username);
  comp.setState(state => ({ finishedCards }));
}

const updateInitialState = async comp => {
  const { username } = comp.props.authData;
  const { done: cards } = await getAllCards();
  comp.setState(state => ({ cards }));
  await updateFinishedCards(username, comp);
};

const markCardAsFinished = comp => async card => {
  // Send data to backend!
  const data = await markAsFinished(card.id);
  // update state
  const { finishedCards } = comp.state;
  comp.setState(state => ({
    finishedCards: [...finishedCards, card.id],
  }));
};
const markCardAsOpen = comp => async card => {
  // Send data to backend!
  const data = await markAsOpen(card.id);
  // update state
  const { finishedCards } = comp.state;
  comp.setState(state => ({
    finishedCards: [...finishedCards.filter(c => c !== card.id)],
  }));
};

const actions = comp => ({
  markCardAsFinished: markCardAsFinished(comp),
  markCardAsOpen: markCardAsOpen(comp),
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Oravat', cards: [], finishedCards: [] };
    this._validAuthStates = ['signedIn'];
  }

  componentDidMount() {
    updateInitialState(this);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { finishedCards } = this.state;
    const { authState } = this.props;
    const changeInFinishedCards =
      finishedCards.length === 0 ||
      finishedCards.sort().join(',') !==
        nextState.finishedCards.sort().join(',');
    const changeInAuthState = authState !== nextProps.authState;
    return changeInFinishedCards || changeInAuthState;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}

  render() {
    if (this.props.authState == 'signedIn') {
      updateFinishedCards(this.props.authData.username, this);
      const { finishedCards, name, schools } = this.state;
      const journey = { total: cards.length, finished: finishedCards.length };
      return (
        <main className="App">
          <Header name={name} journey={journey} />
          <Setup schools={schools} cities={fakeData.cities} />
          <Cards
            cards={cards}
            finishedCards={finishedCards}
            actions={actions(this)}
          />
          <Info />
        </main>
      );
    }
    return null;
  }
}

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

const MyAuthenticatedApp = wrapHOC(App);
const signUpConfig = {
  header: 'Luo tunnus DivED -seurantaan',
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

const AppWithAuth = () => (
  <Authenticator
    hide={[ConfirmSignUp, VerifyContact]}
    signUpConfig={signUpConfig}
    amplifyConfig={config}
  >
    {/* <MyCustomSignUp override="SignUp" /> */}
    {/* <MyCustomComfirmSignUp override="ConfirmSignUp"/> */}
    <MyCustomConfirmSignup />
    <MyAuthenticatedApp onVerify={Authenticator.changeState} />
  </Authenticator>
);

export default AppWithAuth;

// export default withAuthenticator(App, { signUpConfig })
