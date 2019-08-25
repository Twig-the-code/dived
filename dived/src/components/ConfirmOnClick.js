import React from 'react';
import Card from './Card';

class ConfirmOnClick extends React.Component {
  constructor(props) {
    super(props);
    this.state = { confirm: null };
  }

  render() {
    const p = this.state.confirm ? (
      this.state.confirm
    ) : (
      <Card {...this.props} />
    );

    return (
      <div className="confirm">
        <p>fOOO</p>
        <Card {...this.props} />
      </div>
    );
  }
}
