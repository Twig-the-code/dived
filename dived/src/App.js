import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Cards from "./components/Cards";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Oravat",
      journey: {
        total: 35,
        finished: 3,
      }
    }
  }

  render() {


    return (
      <div className="App">
        <Header name={this.state.name}
                journey={this.state.journey}
        >

        </Header>
        <Cards>

        </Cards>
      </div>
    );
  }
}

export default App;
