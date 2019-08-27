import {I18n} from 'aws-amplify';
import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faCheckSquare,
  faListAlt,
  faEye,
} from '@fortawesome/free-regular-svg-icons';
import Card, {CardActions} from './Card';
import {} from './Cards.css';

const isFinished = (finishedCards, card) => {
  return finishedCards.includes(card.id);
};
const getFinished = (finishedCards, card) => {
  return isFinished(finishedCards, card) ? 'finished' : 'unfinished';
};

const Filter = () => {
  return (
    <div className="filter-container">
      <button type="button" className="filter filter--active">
        <FontAwesomeIcon icon={faEye}/>
        <span className="filter__all">{I18n.get('filter all')}</span>
      </button>
      <button type="button" className="filter">
        <FontAwesomeIcon icon={faListAlt}/>
        <span className="filter__unfinished">
          {I18n.get('filter unfinished')}
        </span>
      </button>
      <button type="button" className="filter">
        <FontAwesomeIcon icon={faCheckSquare}/>
        <span className="filter__finished">{I18n.get('filter finished')}</span>
      </button>
    </div>
  );
};
Filter.propTypes = {};

class Cards extends React.Component {
  createAllCards(cards) {
    return cards.map(this.createCard());
  }

  createCard() {
    const {finishedCards, actions} = this.props;
    return card => {
      const action = isFinished(finishedCards, card)
        ? actions.markCardAsOpen
        : actions.markCardAsFinished;
      return (
        <Card
          key={card.id}
          card={card}
          status={getFinished(finishedCards, card)}
          action={action}
        />
      );
    };
  }

  render() {
    const {cards} = this.props;
    return (
      <div>
        <Filter/>
        <div className="card-container">{this.createAllCards(cards)}</div>
      </div>
    );
  }
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  finishedCards: PropTypes.arrayOf(PropTypes.strings).isRequired,
  actions: CardActions.isRequired,
};

Cards.defaultProps = {
  cards: [],
};

export default Cards;
