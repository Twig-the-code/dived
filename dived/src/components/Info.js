import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import Cards from "./Cards";

class AboutThisApp extends React.Component {
  render() {
    const {card, status} = this.props
    return <footer>

      <p>
        Tähän tietoa tästä appiksesta.
      </p>
      <p>Koulut, Tilastokeskus. Aineisto on ladattu Tilastokeskulta 17.06.2019 lisenssillä <a
        href="https://creativecommons.org/licenses/by/4.0/deed.fi">CC BY 4.0</a>.</p>
    </footer>
  }
}

AboutThisApp.propTypes = {
  card: PropTypes.shape({id: PropTypes.number, type: PropTypes.string, name: PropTypes.string}),
  actions: PropTypes.shape({
    markCardAsFinished: PropTypes.func.isRequired,
  }).isRequired
}

AboutThisApp.defaultProps = {}

export default AboutThisApp;
