import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Cards from "./components/Cards";

const card1={id:1 , name: "Testi"}
const card2={id:2 , name: "Testi"}
const card3={id:3 , name: "Testi"}

const cards={
  yellow: [card1, card2, card3,],
  red: [card1, card2, card3,],
  green: [card1, card2, card3,],
  blue: [card1, card2, card3,],
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Oravat",
      journey: {
        total: 35,
        finished: 3,
      },
      cards,
    }
  }

  render() {


    return (
      <div className="App">
        <Header name={this.state.name}
                journey={this.state.journey}
        >

        </Header>
        <Cards cards={this.state.cards}>

        </Cards>
      </div>
    );
  }
}

export default App;
