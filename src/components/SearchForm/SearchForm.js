import React from 'react';
import './SearchForm.css';

const SearchForm = ({ searchContent, searchInput, handleChangeEvent }) => {
  console.log(searchInput)
  return (
    <section className="header-container">
      <h2 className="header">WHAT'S NEW?!?</h2>
      <input 
      value={searchInput}
      className="user-input"
      name="searchInput"
      onChange={handleChangeEvent}
      ></input>
  
      <button className="search-btn" onClick={searchContent}>search</button>
    </section>
  )
}

export default SearchForm;