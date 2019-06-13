import React from 'react';
import './Card.css';

class Card extends React.Component{
  render() {
    const {card, status} = this.props
    return <a role="button" className={`card card--${card.type} card--${status}`}>
      {card.id}

    </a>
  }
}
export default Card;
