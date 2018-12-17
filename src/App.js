import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>I find your lack of fetch disturbing..</h1>
      <Loader type="Grid" color="red" height={80} width={80} />
      </div>
    );
  }
}

export default App;
