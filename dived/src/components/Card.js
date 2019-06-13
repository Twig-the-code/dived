import React from 'react';
import CardSection from "./CardSection";
import './Card.css';

class Card extends React.Component{
  render() {

    return <div className={`card`}>
      {this.props.card.id}

    </div>
  }
}
export default Card;
