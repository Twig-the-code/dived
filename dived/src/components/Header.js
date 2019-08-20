import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Css from './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  handleClick() {
    console.log('checked', this.state.checked);
    this.setState({ checked: !this.state.checked });
  }

  render() {
    const { finished, total } = this.props.journey;
    return (
      <header className="page-header">
          <h2>{this.props.name}</h2>
          <div className="page-header__menu">
            <FontAwesomeIcon icon={faBars} onClick={() => this.handleClick()} />
        </div>
        <input
          type="checkbox"
          id="bars-open"
          checked={this.state.checked ? 'checked' : ''}
          className="toggle__input"
        />
        <nav className="page-header__nav">
          <ul>
            <li>logout</li>
            <li>svenska</li>
            <li>filter</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
