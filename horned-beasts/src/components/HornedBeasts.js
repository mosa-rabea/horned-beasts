import React, { Component } from 'react';

export default class HornedBeasts extends Component {
  render() {
    const { title, imageurl, description, keyword, horns } = this.props;
    return (
      <div className='card'>
        <h2>{title}</h2>
        <img src={imageurl} alt={title} />
        <p>{description}</p>
        <p>{keyword}</p>
        <p>no of horns : {horns}</p>
      </div>
    );
  }
}
