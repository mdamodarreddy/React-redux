import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AdditionContainer from './containers/additionContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AdditionContainer/>
      </div>
    );
  }
}

export default App;