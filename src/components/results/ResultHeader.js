import React from "react";

export default ({ query }) => (
  <div className="result-header">
    <div className="result-header-title">
      {query && query.length > 0
        ? `Results for your search "${query}"`
        : `Most popular results`}
    </div>
    <div className="result-header-filter">
      Filters :<br/>
      <div>
        <input id="action" type="radio" name="type" value="action" />
        <label htmlFor="action">Action movie</label>
      </div>
      <div>
        <input id="romance" type="radio" name="type" value="romance" />
        <label htmlFor="romance">Romance movie</label>
      </div>
    </div>
  </div>
);
