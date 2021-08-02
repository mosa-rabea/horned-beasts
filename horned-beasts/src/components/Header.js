import React from 'react';

class Header extends React.Component {
  state = {
    color: '#334756',
  };
  render() {
    return (
      <header style={{ background: this.state.color }}>
        <h1>Horned Beasts</h1>
      </header>
    );
  }
}
export default Header;
