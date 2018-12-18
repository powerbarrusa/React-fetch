//get the React library from the dependencies
import React, { Component } from 'react';
//get the loader from the npm package
import Loader from 'react-loader-spinner'
import './App.css';

//instantiating the class that extends the React Component 
class App extends Component {

  render() {

    //what we are returning in the render function
    return (
      <div className="App">
        <h1>I find your lack of fetch disturbing..</h1>
        <Loader type="Grid" color="red" height={80} width={80} />
      </div>
    );
  }
}

export default App;
