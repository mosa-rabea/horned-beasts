import React from 'react';
import Card from 'react-bootstrap/Card';
export default class HornedBeasts extends React.Component {
  state = { fanClk: 0 };

  render() {
    const { title, img, description } = this.props;
    return (
      <>
        <div className='beasts-container'>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant='top'
              onClick={() => {
                this.setState({ fanClk: this.state.fanClk + 1 });
              }}
              src={img}
              alt={title}
            />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Card.Footer>❤️ : {this.state.fanClk}</Card.Footer>
          </Card>
        </div>
      </>
    );
  }
}
