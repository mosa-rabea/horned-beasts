import React from 'react';
import Card from 'react-bootstrap/Card';
export default class HornedBeasts extends React.Component {
  state = { fanClk: 0 };

  render() {
    
    return (
      <>
        <div className='cardP'>
          <Card style={{ width: '18rem' }}>
            <Card.Img
             
              onClick={() => { this.setState({ fanClk: this.state.fanClk + 1 });}}
              src={this.props.img}
              alt={this.props.title}
              variant='top'
            />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>{this.props.description}</Card.Text>
            </Card.Body>
            <Card.Footer>❤️ : {this.state.fanClk}</Card.Footer>
          </Card>
        </div>
      </>
    );
  }
}
