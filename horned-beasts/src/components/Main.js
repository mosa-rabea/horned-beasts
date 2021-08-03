import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import BeastsAr from './res/data.json';
import CardDeck from 'react-bootstrap/CardDeck';
import Navbar from 'react-bootstrap/Navbar';
import { Form, FormControl } from 'react-bootstrap';

export default class Main extends Component {
  state = {
    dataArr: [{}],
  };
  updateFilter = (text) => {
    if (text) {
      this.data(text.toLowerCase().trim());
    } else {
      this.setState({ dataArr: BeastsAr });
    }
    this.render();
  };

  data = (text) => {
    if (text === 'all') {
      this.setState({
        dataArr: BeastsAr,
      });
    } else {
      let arr = BeastsAr.filter((each) => each.keyword.startsWith(text));
      if (arr.length > 0) {
        this.setState({
          dataArr: arr,
        });
      }
    }
  };

  componentDidMount = () => {
    this.data('all');
  };

  render() {
    return (
      <main>
        <Navbar expand='lg' variant='light' bg='light'>
          <Navbar.Brand href='#'>Horned BeastsAr Gallery</Navbar.Brand>
          <Form>
            <FormControl
              type='search'
              placeholder='search by keywords'
              className='mr-2'
              aria-label='search'
              onChange={(e) => {
                this.updateFilter(e.target.value);
              }}
            />
          </Form>
        </Navbar>
        <div>
          <CardDeck>
            {this.state.dataArr.map((each, index) => (
              <div key={index}>
                <HornedBeasts
                  title={each.title}
                  imageurl={each.image_url}
                  description={each.description}
                  keywords={each.keyword}
                />{' '}
              </div>
            ))}
          </CardDeck>
        </div>
      </main>
    );
  }
}
