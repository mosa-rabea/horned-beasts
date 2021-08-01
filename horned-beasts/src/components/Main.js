import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import Beasts from './res/data.json';

export default class Main extends Component {
  render() {
    return (
      <main>
        {Beasts.map((beast, index) => (
          <HornedBeasts
            key={index}
            title={beast.title}
            imageurl={beast.image_url}
            description={beast.description}
            keyword={beast.keyword}
            horns={beast.horns}
          />
        ))}
      </main>
    );
  }
}
