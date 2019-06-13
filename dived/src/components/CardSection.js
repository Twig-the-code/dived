import React from 'react';
import Card from "./Card";

class CardSection extends React.Component{
  render() {
    const sections = []

    return <div>
      Section {this.props.colour}
      {this.props.cards.map(card=><Card card={card}></Card>)}
    </div>
  }
}
export default CardSection;
