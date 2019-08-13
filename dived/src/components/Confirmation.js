import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import Cards from "./Cards";

const Confirm = props => {

  return <div>p</div>
}


Confirm.propTypes = {
  card: PropTypes.shape({id: PropTypes.number, type: PropTypes.string, name: PropTypes.string}),
  actions: PropTypes.shape({
    markCardAsFinished: PropTypes.func.isRequired,
    markCardAsUnFinished: PropTypes.func.isRequired,
  }).isRequired
}

Confirm.defaultProps = {

}

export default Confirm;
