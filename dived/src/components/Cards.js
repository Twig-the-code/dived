import { I18n } from 'aws-amplify';
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckSquare,
  faListAlt,
  faEye,
} from '@fortawesome/free-regular-svg-icons';
import Card, { CardActions } from './Card';
import {} from './Cards.css';

const isFinished = (finishedCards, card) => {
  return finishedCards.includes(card.id);
};
const getFinished = (finishedCards, card) => {
  return isFinished(finishedCards, card) ? 'finished' : 'unfinished';
};

const Filter = props => {
  const { filters, currentFilter, onClick } = props;
  return (
    <div className="filter-container">
      <button
        type="button"
        className={`filter ${
          currentFilter === filters.all ? 'filter--active' : ''
        }`}
        onClick={() => onClick(filters.all)}
      >
        <FontAwesomeIcon icon={faEye} />
        <span className="filter__all">{I18n.get('filter all')}</span>
      </button>
      <button
        type="button"
        className={`filter ${
          currentFilter === filters.unfinished ? 'filter--active' : ''
        }`}
        onClick={() => onClick(filters.unfinished)}
      >
        <FontAwesomeIcon icon={faListAlt} />
        <span className="filter__unfinished">
          {I18n.get('filter unfinished')}
        </span>
      </button>
      <button
        type="button"
        className={`filter ${
          currentFilter === filters.finished ? 'filter--active' : ''
        }`}
        onClick={() => onClick(filters.finished)}
      >
        <FontAwesomeIcon icon={faCheckSquare} />
        <span className="filter__finished">{I18n.get('filter finished')}</span>
      </button>
    </div>
  );
};
Filter.propTypes = {
  filters: PropTypes.shape({
    all: PropTypes.string.isRequired,
    unfinished: PropTypes.string.isRequired,
    finished: PropTypes.string.isRequired,
  }),
  currentFilter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const FILTERS = {
  all: 'all',
  unfinished: 'unfinished',
  finished: 'finished',
};

const FILTER_FUNCS = {
  all: props => () => true,
  unfinished: finishedCards => c => !isFinished(finishedCards, c),
  finished: finishedCards => c => isFinished(finishedCards, c),
};

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: FILTERS.all };
  }

  setFilter(filter) {
    this.setState({ filter });
  }

  createAllCards(cards) {
    const { filter } = this.state;
    const { finishedCards } = this.props;
    const filterFunc = FILTER_FUNCS[filter]
    return cards.filter(filterFunc(finishedCards)).map(this.createCard());
  }

  createCard() {
    const { finishedCards, actions } = this.props;
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
    const { filter } = this.state;
    const { cards } = this.props;
    return (
      <div>
        <Filter
          filters={FILTERS}
          currentFilter={filter}
          onClick={e => this.setFilter(e)}
        />
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
