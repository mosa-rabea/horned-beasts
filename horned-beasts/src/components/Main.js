import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import BeastsArray from './reso/data.json';
import CardDeck from 'react-bootstrap/CardDeck';

export default class Main extends Component {
  render() {
    return (
      <main>
        <div>
          <CardDeck>
            {BeastsArray.map((beastItem, index) => (
              <div key={index}>
                <HornedBeasts
                  title={beastItem.title}
                  img={beastItem.image_url}
                  description={beastItem.description}
                  
                />{' '}
              </div>
            ))}
          </CardDeck>
        </div>
      </main>
    );
  }
}
