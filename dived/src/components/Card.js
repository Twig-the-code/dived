import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import Cards from "./Cards";

class Card extends React.Component{
  render() {
    const {card, status } = this.props
    return <a
      role="button"
      className={`card card--${card.type} card--${status}`}
      onClick={event => this.handleClick(card)}
    >
      {card.number}

    </a>
  }
  handleClick(card){
    this.props.actions.markCardAsFinished(card)
  }
}
Card.propTypes = {
  card: PropTypes.shape({id: PropTypes.number, type: PropTypes.string, name: PropTypes.string}),
  actions: PropTypes.shape({
    markCardAsFinished: PropTypes.func.isRequired,
  }).isRequired
}

Card.defaultProps = {
}

export default Card;
