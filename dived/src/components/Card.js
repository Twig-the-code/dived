import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import Cards from "./Cards";


class ConfirmOnClick extends React.Component{
  constructor(props){
    super(props)
    this.state = {confirm: null}
  }

  render() {
    const p = this.state.confirm ? this.state.confirm : <Card {...this.props}/>

    return <div class="confirm">
      {p}
    </div>
  }
}




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
    markCardAsUnFinished: PropTypes.func.isRequired,
  }).isRequired
}

Card.defaultProps = {
}

export default ConfirmOnClick;
