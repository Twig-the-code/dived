import React from 'react';

class Header extends React.Component{
  render() {
    const {finished,total}=this.props.journey
    return (

    <header className="header">
      <h2>{this.props.name}</h2>
      <span className="header__journey">{`${finished} / ${total}`}</span>
    </header>
    )
  }
}
export default Header;
