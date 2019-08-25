import { I18n } from 'aws-amplify';
import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
  handleClick(card) {
    const { actions } = this.props;
    actions.markCardAsFinished(card);
  }

  render() {
    const { card, status } = this.props;
    return (
      <button
        type="button"
        className={`card card--${card.type} card--${status}`}
        onClick={() => this.handleClick(card)}
      >
        <div className="card__number">
          <span>{card.number}</span>
        </div>
        <span className="card__status">{I18n.get(`Card ${status}`)}</span>
      </button>
    );
  }
}

export const CardActions = PropTypes.shape({
  markCardAsFinished: PropTypes.func.isRequired,
  markCardAsUnFinished: PropTypes.func.isRequired,
});
Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.number,
  }).isRequired,
  actions: CardActions.isRequired,
  status: PropTypes.bool,
};

Card.defaultProps = {
  status: false,
};

export default Card;
