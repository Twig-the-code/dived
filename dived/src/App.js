import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Cards from "./components/Cards";
import getAllCards from "./actions/get-all-cards";
import getAllFinishedCards from "./actions/get-all-finished-cards";

const updateState = async (comp) => {
  const cards = await getAllCards()
  comp.setState(state => ({cards}))
  const finishedCards = await getAllFinishedCards()
  comp.setState(state => ({finishedCards}))

}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {name: "Oravat",journey: {total: 35,
        finished: 3,}, finishedCards:[]}
  }

  componentDidMount() {
    updateState(this)
  }

  render() {


    return (
      <main className="App">
        <Header name={this.state.name}
                journey={this.state.journey}
        >

        </Header>
        <Cards cards={this.state.cards} finishedCards={this.state.finishedCards}>

        </Cards>
      </main>
    );
  }
}

export default App;
