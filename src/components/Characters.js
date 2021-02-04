import React, { Component } from 'react';
import CardList from './CardList';

class Characters extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ data:data.results })
      });

  }

  render(){
    const { data } = this.state;
    return (
      <div className="white">
        <CardList data={data} type="characters"/>
      </div>
    );
  }
}

export default Characters;