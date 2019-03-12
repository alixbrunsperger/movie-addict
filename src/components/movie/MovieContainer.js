import React, { Component } from 'react';
import {getMovieData} from '../../utils/dataFetcher.js';
import Header from '../common/Header';
import SearchPopup from '../common/SearchPopup';

class MovieContainer extends Component {
  state={
    movie: null
  };
  componentDidMount = async () => {
    const { match } = this.props;
    const { id } = match.params;
    if(id){
      const movie = await getMovieData(id);
      this.setMovie(movie);
    }
  }

  setMovie = movie => this.setState({movie});

  render() {

    const { id } = this.props;
    const { movie } = this.state;
    return (
      <div className="movie-container">
          <Header />
          <SearchPopup />
          {movie &&
          <div className="movie-element">
            <div className="movie-trailer">
              <img src="/images/fake-elements/trailer.png" />
            </div>
            <div className="movie-info">
              <div className="movie-info-text">
                <div className="movie-info-title">{movie.title}</div>
                <div className="movie-info-date">Release date: {movie.release_date}</div>
                Actors:
                {movie.credits && movie.credits.cast.slice(0, 4).map(actor =>
                <div className="movie-info-actor"><b>{actor.name}</b> in the role of <b>{actor.character}</b></div>)}
              </div>
              <div className="movie-info-actors">
                <img src="/images/fake-elements/actors.png" />
              </div>
            </div>
            <div className="movie-synopsis">
              {movie.overview}
            </div>
            <div className="movie-opinions">
              <b>Opinions:</b><br/>
              <div className="movie-opinion">I loved it! <br/> by Nagel
              </div>
              <div className="movie-opinion">Not too bad! <br/> by Lena</div>
            </div>
            <div className="movie-similars">
              List of similar movies
            </div>
        </div>}
      </div>
    );
  }
}

export default MovieContainer;
