import React from 'react';
import Amplify, { Auth, I18n } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';

import Header from './components/Header';
import Cards from './components/Cards';
import Info from './components/Info';
import getAllCards from './actions/get-all-cards';
import getAllFinishedCards from './actions/get-all-finished-cards';
import markAsFinished from './actions/mark-card-as-finished';
import getAllSchowols from './actions/get-all-schools';

import { fakeData } from './helpers/fakeData';

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

I18n.putVocabularies(cardDict);

const updateInitialState = async comp => {
  const { username } = comp.props.authData;
  const { done: cards } = await getAllCards();
  comp.setState(state => ({ cards }));
  const { done: finishedCards } = await getAllFinishedCards(username);
  comp.setState(state => ({ finishedCards }));
};

const markCardAsFinished = comp => async card => {
  // Send data to backend!
  const data = await markAsFinished(card.id);
  console.log({ card });
  // update state
  const { finishedCards } = comp.state;
  comp.setState(state => ({
    finishedCards: [...finishedCards, card.id],
  }));
};

const actions = comp => ({
  markCardAsFinished: markCardAsFinished(comp),
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Oravat', cards: [], finishedCards: [] };
  }

  componentDidMount() {
    updateInitialState(this);
  }

  render() {
    const { finishedCards, cards, name, schools } = this.state;
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
}

const signUpConfig = {
  // hideAllDefaults: true,
  signUpFields: [
    {
      label: 'Käyttäjänimi',
      key: 'username',
      required: true,
      placeholder: 'Käyttäjänimi',
      type: 'string',
      displayOrder: 1,
    },
    {
      label: 'Salasana',
      key: 'password',
      required: true,
      placeholder: 'Salasana',
      type: 'password',
      displayOrder: 2,
    },
  ],
};

export default withAuthenticator(App, true);
// export default withAuthenticator(App, {signUpConfig} );
