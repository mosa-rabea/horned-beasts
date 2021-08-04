import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import Animal from './res/data.json';
import CardDeck from 'react-bootstrap/CardDeck';
import Navbar from 'react-bootstrap/Navbar';
import { Form, FormControl, Dropdown } from 'react-bootstrap';

export default class Main extends Component {
  state = {
    animalData: [{}],
  };
  updateFilter = (text) => {
    if (text) {
      this.data(text.toLowerCase().trim());
    } else {
      this.setState({ animalData: Animal });
    }
    this.render();
  };

  data = (text) => {
    if (text === 'all') {
      this.setState({
        animalData: Animal,
      });
    } else {
      let arr = Animal.filter((animal) => animal.keyword.startsWith(text));
      if (arr.length > 0) {
        this.setState({
          animalData: arr,
        });
      }
    }
  };

  componentDidMount = () => {
    this.data('all');
  };

  hornsFilter = (e) => {
    e.preventDefault();
    let filtertext = e.target.value;
    let arr = Animal.filter((animal) => animal.horns === +filtertext);
    console.log(arr);
    if (arr.length > 0) {
      this.setState({
        animalData: arr,
      });
      console.log(this.state.animalData);
    } else {
      this.setState({
        animalData: Animal,
      });
      console.log(this.state.animalData);
    }
    this.render();
  };
  render() {
    return (
      <main>
        <Navbar expand='lg' variant='light' bg='light'>
          <Navbar.Brand href='#'>Horned Animal Gallery</Navbar.Brand>
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
            <Dropdown>
              <Dropdown.Toggle variant='success' id='dropdown-basic'>
                Number OF Horns
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as='button' onClick={this.hornsFilter} value={1}>
                  1
                </Dropdown.Item>
                <Dropdown.Item as='button' onClick={this.hornsFilter} value={2}>
                  2
                </Dropdown.Item>
                <Dropdown.Item as='button' onClick={this.hornsFilter} value={3}>
                  3
                </Dropdown.Item>
                <Dropdown.Item
                  as='button'
                  onClick={this.hornsFilter}
                  value={100}
                >
                  100
                </Dropdown.Item>
                <Dropdown.Item
                  as='button'
                  onClick={this.hornsFilter}
                  value={'All'}
                >
                  All
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form>
        </Navbar>
        <div>
          <CardDeck>
            {this.state.animalData.map((animal, index) => (
              <div key={index}>
                <HornedBeasts
                  title={animal.title}
                  imageurl={animal.image_url}
                  description={animal.description}
                  keywords={animal.keyword}
                  // horns={animal.horns}
                />{' '}
              </div>
            ))}
          </CardDeck>
        </div>
      </main>
    );
  }
}
