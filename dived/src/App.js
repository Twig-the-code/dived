import React from 'react';
import Amplify, {Auth} from 'aws-amplify'
import {withAuthenticator} from 'aws-amplify-react'

import Header from "./components/Header";
import Cards from "./components/Cards";
import Info from "./components/Info";
import getAllCards from "./actions/get-all-cards";
import getAllFinishedCards from "./actions/get-all-finished-cards";
import markAsFinished from "./actions/mark-card-as-finished";
import getAllSchools from "./actions/get-all-schools";

import './App.css';

import config from './aws-exports'
import Setup from "./components/Setup";
import { I18n } from 'aws-amplify';


Amplify.configure(config)
I18n.setLanguage('fi');


const cardDict = {
  'fi': {
    'Card finished': "Valmis",
    'Card unfinished': "Kortti",
  },
  'se': {
    'Card finished': "Färdigt",
    'Card unfinished': "Kort",
  }
}

I18n.putVocabularies(cardDict);



const updateInitialState = async (comp) => {
  const cards = await getAllCards()
  comp.setState(state => ({cards}))
  const finishedCards = await getAllFinishedCards("rinkkis1")
  comp.setState(state => ({finishedCards}))

}

const markCardAsFinished = comp => async card => {
  // Send data to backend!
  const data = await markAsFinished(card.id)
  console.log({card})
  // update state
  const {finishedCards} = comp.state
  comp.setState(state => ({
    finishedCards: [...finishedCards, card.id]
  }))
}

const actions = comp => ({
  markCardAsFinished: markCardAsFinished(comp)
})

const fakeData = {
  cities: [
    {id: '853', nameFi: 'Turku', nameSe: "Åbo"},
    {id: '202', nameFi: 'Kaarina', nameSe: "S:t Karins"},
    {id: 'lieto', nameFi: 'Lieto', nameSe: ""}
  ],
  cards: [
    {id: 1, number: 1, type: "culture"},
    {id: 2, number: 2, type: "multilanguage"},
    {id: 3, number: 3, type: "multilanguage"},
    {id: 4, number: 4, type: "culture"},
    {id: 5, number: 5, type: "language"},
    {id: 6, number: 6, type: "multilanguage"},
    {id: 7, number: 7, type: "multilanguage"},
    {id: 8, number: 8, type: "digi"},
    {id: 9, number: 9, type: "language"},
    {id: 10, number: 10, type: "culture"},
    {id: 11, number: 11, type: "language"},
    {id: 12, number: 12, type: "multilanguage"},
    {id: 13, number: 13, type: "digi"},
    {id: 14, number: 14, type: "language"},
    {id: 15, number: 15, type: "culture"},
    {id: 16, number: 16, type: "multilanguage"},
    {id: 17, number: 17, type: "multilanguage"},
    {id: 18, number: 18, type: "culture"},
    {id: 19, number: 19, type: "language"},
    {id: 20, number: 20, type: "culture"},
    {id: 21, number: 21, type: "language"},
    {id: 22, number: 22, type: "multilanguage"},
    {id: 23, number: 23, type: "digi"},
    {id: 24, number: 24, type: "culture"},
    {id: 25, number: 25, type: "language"},
    {id: 26, number: 26, type: "multilanguage"},
    {id: 27, number: 27, type: "culture"},
    {id: 28, number: 28, type: "language"},
    {id: 29, number: 29, type: "digi"},
    {id: 30, number: 30, type: "culture"},
    {id: 31, number: 31, type: "language"},
    {id: 32, number: 32, type: "multilanguage"},
    {id: 33, number: 33, type: "culture"},
    {id: 34, number: 34, type: "language"},
    {id: 35, number: 35, type: "digi"},
  ],
  finishedCards: [
    3, 1, 7,8
  ]
}





class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {name: "Oravat",journey: {total: 35,
        finished: 3,}, finishedCards:[]}
  }

  componentDidMount() {
    updateInitialState(this)
  }




  render() {
    const {finishedCards, cards} = fakeData;
    const journey = {total: cards.length, finished: finishedCards.length}
    return (
      <main className="App">
        <Header name={this.state.name}
                journey={journey}
        >

        </Header>
        {/* <Setup schools={this.state.schools} cities={fakeData.cities}/>*/}
        <Cards cards={cards} finishedCards={finishedCards} actions={actions(this)}>

        </Cards>
        <Info/>
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
      displayOrder: 1
    },
    {
      label: 'Salasana',
      key: 'password',
      required: true,
      placeholder: 'Salasana',
      type: 'password',
      displayOrder: 2
    }
  ]
};

export default withAuthenticator(App, true );
// export default withAuthenticator(App, {signUpConfig} );
