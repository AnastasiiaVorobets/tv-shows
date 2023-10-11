import React from 'react';
import './SearchBar.css';

function SearchBar({ setQuery, query }) {
  return (
    <div className="search-block">
      <h1 className='title'>Let's find your favorite shows!</h1>
      <input
        className='input_field'
        type="text"
        placeholder="Type the show's name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
