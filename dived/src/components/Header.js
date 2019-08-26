import { I18n } from 'aws-amplify';
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {} from './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  handleClick() {
    const { checked } = this.state;
    this.setState({ checked: !checked });
  }

  render() {
    const { journey, name } = this.props;
    const { checked } = this.state;
    const { finished, total } = journey;
    return (
      <header className="page-header">
        <div className="page-header__info">
          <h2>{name}</h2>
          <span>{`${finished} / ${total}`}</span>
          <div className="page-header__menu">
            <FontAwesomeIcon icon={faBars} onClick={() => this.handleClick()} />
          </div>
        </div>
        <input
          type="checkbox"
          id="bars-open"
          checked={checked ? 'checked' : ''}
          className="toggle__input"
        />
        <nav className="page-header__nav">
          <ul>
            <li>{I18n.get('Logout')}</li>
            <li>svenska</li>
            <li>filter</li>
          </ul>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  journey: PropTypes.shape({
    finished: PropTypes.number,
    total: PropTypes.number,
  }).isRequired,
  name: PropTypes.string.isRequired,
};

export default Header;
