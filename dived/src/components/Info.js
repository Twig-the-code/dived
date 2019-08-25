import React from 'react';
import './Card.css';

const AboutThisApp = () => {
  return (
    <footer>
      <p>Tähän tietoa tästä appiksesta.</p>
      <p>
        Koulut, Tilastokeskus. Aineisto on ladattu Tilastokeskulta 17.06.2019
        lisenssillä
        <a href="https://creativecommons.org/licenses/by/4.0/deed.fi">
          CC BY 4.0
        </a>
        .
      </p>
    </footer>
  );
};

AboutThisApp.propTypes = {};

AboutThisApp.defaultProps = {};

export default AboutThisApp;
