import React from 'react';

export default ({isPopupActive, hidePopup}) => (
      <div className={`search-popup ${isPopupActive ? "active" : ""}`}>
        <div className="search-block">
          <img src="/images/cross.png" onClick={hidePopup} alt="close icon" />
          <form action="/results">
            <input type="text" name="query" />
            <input type="submit" value="Search" />
          </form>
        </div>
      </div>
  );
  
