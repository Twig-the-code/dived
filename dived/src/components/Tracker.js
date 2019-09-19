import React from 'react';
import Header from './Header';
import Setup from './Setup';
import { fakeData } from '../helpers/fakeData';
import {cards} from "../helpers/cards";
import Cards from './Cards';
import Info from './Info';
import getAllCards from '../actions/get-all-cards';
import getAllFinishedCards from '../actions/get-all-finished-cards';
import markAsFinished from '../actions/mark-card-as-finished';
import markAsOpen from '../actions/mark-card-as-open';

async function updateFinishedCards(username, comp) {
  const { done: finishedCards } = await getAllFinishedCards(username);
  comp.setState(state => ({ finishedCards }));
}

const updateInitialState = async comp => {
  const { username } = comp.props.authData;
  // const { done: cards } = await getAllCards();
  // comp.setState(state => ({ cards }));
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

class Tracker extends React.Component {
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
    // const { cards } = this.state;
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

export default Tracker;
