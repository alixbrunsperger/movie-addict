import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {getMovieData} from '../../utils/dataFetcher.js';

class Result extends Component {
  state={
    movie: null
  };
  componentDidMount = async () => {
    const {id} =this.props;
    if(id){
      const movie = await getMovieData(id);
      this.setMovie(movie);
    }
  }

  setMovie = movie => this.setState({movie});

  render() {
    const { id } = this.props;
    const { movie } = this.state;
    const genres = movie && movie.genres.map(genre=> genre.name);
    return (
      <div className="result">
          {movie &&
          <div className="result-element">
            <div className="result-element-picture">
              <img src="/images/fake-elements/movie-search.png" alt={`poster ${movie.title}`} />
            </div>
            <div className="result-element-info">
              <div className="result-element-title">
              <Link to={`movie/${id}`}>{movie.title}</Link>
              </div>
              <span className="result-element-date">Release date: {movie.release_date}</span>
              <span className="result-element-note"> Rating: {movie.vote_average}</span>
              <div className="result-element-genre"><b>Genres</b>: {genres.join(", ")}</div>
            </div>
          </div>}
      </div>
    );
  }
}

export default Result;
