import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import Beasts from './reso/data.json';
import CardDeck from 'react-bootstrap/CardDeck';

export default class Main extends Component {
  render() {
    return (
      <main>
        <div>
          <CardDeck>
            {Beasts.map((beast, index) => (
              <div key={index}>
                <HornedBeasts
                  title={beast.title}
                  img={beast.image_url}
                  description={beast.description}
                  
                />{' '}
              </div>
            ))}
          </CardDeck>
        </div>
      </main>
    );
  }
}
