import React, { useState, useCallback, useEffect } from 'react'
// import debounce from 'lodash.debounce';

import useDebounce from '../../hooks/useDebounce';

import './input.css';
import searchImage from '../../assets/search.svg';

export default function Input({ loading, search, updateSearch }) {

  const [keyword, setKeyword] = useState(search);
  const debouncedKeyword = useDebounce(keyword, 500);

  useEffect(() => {
    updateSearch(keyword);
  }, [debouncedKeyword]);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleClick = () => {
    updateSearch(keyword);
  }
  
  return (
    <div className="input-wrapper">
      <div className="input-control">
        <img src={searchImage} alt="search icon" className="search-icon" />
        <input
          value={keyword}
          className="search-input"
          placeholder="Search show titles"
          onChange={handleChange}
        />
      </div>
      <button className="search-button" onClick={handleClick}>
        {loading ? 'Loading...' : 'Search'}
      </button>
    </div>
  )
}
