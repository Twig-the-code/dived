import { I18n } from 'aws-amplify';
import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const CardPropType = PropTypes.shape({
  id: PropTypes.number,
  type: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
});

export const ConfirmCard = props => {
  const { card, status, onClick, onConfirm } = props;
  return (
    <div className="confirm">
      <div className={`confirm__card card--${card.type} card--${status}`}>
        <div className="card__excerpt">
          {I18n.get("Confirm card intro")}
        </div>
        <div className="card__number">
          <span>{card.number}</span>
        </div>
        <div className="card__title">
          {I18n.get(`Card ${card.number} title`)}
        </div>
        <div className="card__excerpt">
          {I18n.get("Confirm card tip")}
        </div>
        <div className="confirm__buttons">
          <button
            type="button"
            className="confirm confirm--cancel"
            onClick={e => {
              onClick(card);
            }}
          >
            {I18n.get('cancel')}
          </button>
          <button
            type="button"
            className="confirm confirm--confirm"
            onClick={e => {
              onClick(card);
              onConfirm(card);
            }}
          >
            {I18n.get('confirm')}
          </button>
        </div>
      </div>
    </div>
  );
};
export const ConfirmRemovalOfProgressCard = props => {
  const { card, status, onClick, onRemoval } = props;
  return (
    <div className="confirm">
      <div className={`confirm__card card--${card.type} card--${status}`}>
        <div className="card__excerpt">
          {I18n.get("Confirm removal intro")}
        </div>
        <div className="card__number">
          <span>{card.number}</span>
        </div>
        <div className="card__title">
          {I18n.get(`Card ${card.number} title`)}
        </div>
        <div className="card__excerpt">
          {I18n.get("Confirm removal tip")}
        </div>
        <div className="confirm__buttons">
          <button
            type="button"
            className="confirm confirm--cancel"
            onClick={e => {
              onClick(card);
            }}
          >
            {I18n.get('cancel')}
          </button>
          <button
            type="button"
            className="confirm confirm--confirm"
            onClick={e => {
              onClick(card);
              onRemoval(card);
            }}
          >
            {I18n.get('remove')}
          </button>
        </div>
      </div>
    </div>
  );
};
ConfirmCard.propTypes = {
  card: CardPropType.isRequired,
};

class Card extends React.Component {
  handleClick(card) {
    const { action } = this.props;
    action(card);
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
  card: CardPropType.isRequired,
  action: PropTypes.func,
  status: PropTypes.bool,
};

Card.defaultProps = {
  status: false,
  action: () => {
  },
};

export default Card;
