import React from 'react';
import PropTypes from 'prop-types';
import Card from "./Card";
import Css from "./Cards.css";


const isFinished = (finishedCards, card) => {
  return finishedCards.includes(card.id) ? "finished" : "unfinished"
}

class Cards extends React.Component {
  render() {
    return <main className="card-container">
      {this.createAllCards(this.props.cards)}
    </main>
  }

  createAllCards(cards) {
    return cards.map(
      this.createCard()
    );
  }

  createCard() {
    return card => <Card key={card.id} card={card}
                         status={isFinished(this.props.finishedCards, card)}/>;
  }

// doMagicThings :: _ => JSX
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, type: PropTypes.string, name: PropTypes.string}))
}

Cards.defaultProps = {
  cards: []
}

export default Cards;
