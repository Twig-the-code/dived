import React from 'react';
import Amplify, {Auth} from 'aws-amplify'
import {withAuthenticator} from 'aws-amplify-react'

import Header from "./components/Header";
import Cards from "./components/Cards";
import Info from "./components/Info";
import getAllCards from "./actions/get-all-cards";
import getAllFinishedCards from "./actions/get-all-finished-cards";
import markAsFinished from "./actions/mark-card-as-finished";


import './App.css';

import config from './aws-exports'
import Setup from "./components/Setup";
Amplify.configure(config)

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
  ]
,
  schools: [
    {id: 'valkeavuoren-koulu', name: 'Valkeavuoren koulu', city: "202"},
    {id: 'kuusiston-koulu', name: 'Kuusiston koulu', city: "202"},
    {id: 'vaha-heikkilan-koulu', name: 'Vähä-Heikkilän koulu', city: "853"},
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
    return (
      <main className="App">
        <Header name={this.state.name}
                journey={this.state.journey}
        >

        </Header>
         <Setup schools={fakeData.schools} cities={fakeData.cities}/>
        <Cards cards={this.state.cards} finishedCards={this.state.finishedCards} actions={actions(this)}>

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
