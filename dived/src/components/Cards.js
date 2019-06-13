import React from 'react';
import CardSection from "./CardSection";

class Cards extends React.Component{
  render() {
    const sections = []
    for (const [colour, cards] of Object.entries(this.props.cards)){
      sections.push(<CardSection colour={colour} cards={cards}>{colour}</CardSection>)
    }
    return <div>
      {sections}

    </div>
  }
}
export default Cards;
