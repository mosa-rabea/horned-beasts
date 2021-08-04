import React from 'react';

class Footer extends React.Component {
  state={
color:"#986D8E"
  }
  render() {
    return (
      <footer onClick={()=>this.setState({color:"#fff"})} style={{background:this.state.color}}>
        <h2>Mousa &copy;</h2>
      </footer>
    );
  }
}
export default Footer;