import React, { Component } from 'react';
import './App.css';
import ReactStrap from './ReactStrap';
import MaterialUI from './MaterialUI'

class App extends Component {
  render() {
    return (
      <div className="App">
          Welcome to my Modal example!
          <ReactStrap />
          <MaterialUI />
      </div>
    );
  }
}

export default App;
