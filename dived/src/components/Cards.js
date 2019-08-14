import {I18n} from 'aws-amplify'
import React from 'react';
import PropTypes from 'prop-types';
import Card from "./Card";
import Css from "./Cards.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCheckSquare, faSquare, faListAlt, faEye} from '@fortawesome/free-regular-svg-icons'

const isFinished = (finishedCards, card) => {
  return finishedCards.includes(card.id) ? "finished" : "unfinished"
}

const Filter = props => {
  return (
    <div className="filter-container">
      <a role="button" className="filter filter--active">
        <FontAwesomeIcon icon={faEye}/>
        <span className="filter__all">{I18n.get("filter all")}</span>
      </a>
      <a role="button" className="filter">
        <FontAwesomeIcon icon={faListAlt}/>
        <span className="filter__unfinished">{I18n.get("filter unfinished")}</span>
      </a>
      <a role="button"  className="filter">
        <FontAwesomeIcon icon={faCheckSquare}/>
        <span className="filter__finished">{I18n.get("filter finished")}</span>
      </a>
    </div>
  )
}
Filter.propTypes = {}

class Cards extends React.Component {
  render() {
    return (
      <div>
        <Filter/>
        <div className="card-container">

          {this.createAllCards(this.props.cards)}
        </div>
      </div>
    )
  }

  createAllCards(cards) {
    return cards.map(
      this.createCard()
    );
  }

  createCard() {
    return card => <Card key={card.id} card={card}
                         status={isFinished(this.props.finishedCards, card)}
                         actions={this.props.actions}
    />;
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
