import React from 'react';
import Header from '../common/Header';
import SearchPopup from '../common/SearchPopup';
import Results from './Results';

export default () => (
      <div className="results-container">
        <Header />
        <SearchPopup />
        <Results />
      </div>
    );
    
