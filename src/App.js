import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component  {

  componentDidMount(){
    /* apis to try:
      https://randomuser.me/
      pokeapi
      some kind of doggo app
    */
    fetch('https://jsonplaceholder.typicode.com/users/') //<== URI of API
    .then(response => response.json()) //convert response to json format
    .then(json => console.log(json)); // here var json is syntatic sugar and is auto linked to the value of response
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

        </header>
      </div>
    );
  }
}

export default App;
