//get the React library from the dependencies
import React, { Component } from 'react';
//get the loader from the npm package
import Loader from 'react-loader-spinner'
import './App.css';

//instantiating the class that extends the React Component 
class App extends Component {

  constructor(){
    super()
    this.state={
      data: ""
    }
  }

  getMovieTitles = () => {
    let movies = this.state.data.map(movie => <p>{movie.title}</p>)
    return movies
  }

  fetchMovies = () => {
    return fetch('https://swapi.co/api/films/')
    .then(res => res.json())
    .then(data => {
      this.setState({data: data.results})
      return data
      })
    }


  componentDidMount(){
    this.fetchMovies()
    .catch(err => console.error(err))
  }

  render() {

    //what we are returning in the render function
    return (
      <div className="App">
        <h1>I find your lack of fetch disturbing..</h1>
        <div>
          {this.state.data ? this.getMovieTitles() : <Loader type="Grid" color="red" height={80} width={80} />}
        </div>
      </div>
    );
  }
}

export default App;
