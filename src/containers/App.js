import React, { Component } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Content from '../components/Content';
import './App.css';

class App extends Component {
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
      <div className="App">
        <Header/>
        <Menu/>
        <Content/>
      </div>
      );
  }
}

export default App;
