import React, { Component } from 'react';
import CardList from '../components/CardList';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ data:data.results })
      });

  }


  render(){
    const { data } = this.state;
    return !data.length ? 
      <h1>Loading...</h1> :
      (
        <nav className="pa3 pa4-ns">
          <h1 className="white b f1 f-headline-ns tc db mb3 mb4-ns star-wars-font">Star Wars</h1>
          <div className="tc pb3">
            <a className="link dim white f6 f5-ns dib mr3" href="#" title="People">People</a>
            <a className="link dim white f6 f5-ns dib mr3" href="#" title="Films">Films</a>
            <a className="link dim white f6 f5-ns dib mr3" href="#" title="Starships">Starships</a>
            <a className="link dim white f6 f5-ns dib mr3" href="#" title="Vehicles">Vehicles</a>
            <a className="link dim white f6 f5-ns dib mr3" href="#" title="Planets">Planets</a>
            <a className="link dim white f6 f5-ns dib" href="#" title="Species">Species</a>
          </div>
          <div className='tc'>
            <CardList data={data} />
          </div>
        </nav>
      );
  }
}

export default App;
