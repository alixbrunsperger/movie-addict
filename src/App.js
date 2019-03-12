import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from './components/home/HomeContainer';
import ResultsContainer from './components/results/ResultsContainer';
import MovieContainer from './components/movie/MovieContainer';
import './styles/style.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">

          <Route exact path="/" component={HomeContainer} />
          <Route path="/results" component={ResultsContainer} />
          <Route path="/movie/:id" component={MovieContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
