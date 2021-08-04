import React from 'react';
import Card from 'react-bootstrap/Card';
import SelectedBeast from './SelectedBeast';

export default class HornedBeasts extends React.Component {
  state = { imageClicks: 0, show: false };
   increaseClicks = () => {
    this.setState({ imageClicks: this.state.imageClicks + 1})
   }

  hideonClose = () => {
    this.setState({ show: false })
  }
  showonClick = () => {
    this.setState({ show: true })
  }

  render() {
    const { title, imageurl, description,keywords } = this.props;
    return (
      <>
        <div className='cardP'>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              onClick={this.showonClick}
              variant='top'
              src={imageurl}
              alt={title}
            />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {description}
              
                </Card.Text>
                <Card.Text>
               
                {keywords}
                </Card.Text>
               <button onClick={this.increaseClicks}>{'❤️     '}</button> 
            </Card.Body>
            <Card.Footer>
            {this.state.imageClicks}{' '}
            </Card.Footer>
          </Card>
          <SelectedBeast 
          show={this.state.show}
          title={this.props.title}
          imageurl ={this.props.imageurl}
          description={this.props.description}
          handleClose={this.hideonClose}/>
        </div>
      </>
    );
  }
}
