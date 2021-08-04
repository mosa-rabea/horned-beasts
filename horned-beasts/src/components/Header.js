import React from 'react';

class Header extends React.Component {
  state = { imageClicks: 0, show: false };
  increaseClicks = () => {
    this.setState({ imageClicks: this.state.imageClicks + 1 });
  };

  state = {
    backgroundColor: '#334756',
  };
  setColor = () => {
    let color = ['#986D8E', '#87A8A4', '#D9CAB3', '#EFE3D0'];
    let rnd = () => Math.floor(Math.random() * 3);
    this.setState({ backgroundColor: color[rnd()] });
  };
  render() {
    return (
      <header
        className='h'
        onClick={this.setColor}
        style={{ background: this.state.backgroundColor }}
      >
        <h1>Horned Beasts</h1>
      </header>
    );
  }
}
export default Header;