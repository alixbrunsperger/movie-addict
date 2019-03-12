import React, { Component } from "react";
import Result from "./Result";
import ResultHeader from "./ResultHeader";
import { getPopularMovies, getMovies } from "../../utils/dataFetcher.js";

class Results extends Component {
  state = {
    query: "",
    resultList: []
  };

  componentDidMount = async () => {
    const { search } = window.location;
    let query = "";
    if (search) {
      const query = search.split("=")[1];
      if(query){
        const {results} = await getMovies(query);
        this.setQuery(query);
        this.setResultList(results);
      } else {
        const {results} =  await getPopularMovies();
        this.setResultList(results);
      }
    }
    const {results} = await getPopularMovies();
    this.setResultList(results);
  };

  setQuery = query => this.setState({query})

  setResultList = resultList => this.setState({ resultList });

  render() {
    const { query, resultList } = this.state;
    return (
      <div className="results">
        <ResultHeader query={query} />
        {resultList &&
          resultList.map((result, index) => (
            <Result key={index} id={result.id} />
          ))}
      </div>
    );
  }
}

export default Results;
