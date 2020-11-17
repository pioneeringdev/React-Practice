import React, { useState } from 'react'
import './input.css';
import searchImage from '../../assets/search.svg';

export default function Input({ search, updateSearch }) {

  const [value, setValue] = useState(search);
  const handleChange = (e) => {
    setValue(e.target.value);
  }
  const handleClick = () => {
    updateSearch(value)
  }
  return (
    <div className="input-wrapper">
      <div className="input-control">
        <img src={searchImage} alt="search icon" className="search-icon" />
        <input
          className="search-input"
          value={value}
          onChange={updateSearch}
          placeholder="Search show titles"
          onChange={handleChange}
          />
      </div>
      <button className="search-button" onClick={handleClick}>Search</button>
    </div>
  )
}
