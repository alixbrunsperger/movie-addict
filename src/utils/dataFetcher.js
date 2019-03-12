require('es6-promise').polyfill();
require('isomorphic-fetch');

const API_KEY = "9618628fa1ffaa6ea5cbdc6f8f5a44d3";
const API_KEY_URL_ADDON = `api_key=${API_KEY}`;
const BASE_URL = "https://api.themoviedb.org/3";

export const getMovieData = movieId =>{
  return fetch(`${BASE_URL}/movie/${movieId}?${API_KEY_URL_ADDON}&append_to_response=credits`)
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    });
}

export const getPopularMovies = () =>{
  return fetch(`${BASE_URL}/movie/popular?${API_KEY_URL_ADDON}`)
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    });
}

export const getMovies = (keyword) =>{
  return fetch(`${BASE_URL}//search/movie?query=${keyword}&${API_KEY_URL_ADDON}`)
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    });
}
