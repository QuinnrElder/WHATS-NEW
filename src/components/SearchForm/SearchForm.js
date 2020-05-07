import React from 'react';
import './SearchForm.css';

const SearchForm = (props) => {
  console.log(props)
  return (
    <section className="header-container">
      <h2 className="header">WHAT'S NEW?!?</h2>
      <input className="user-input"
      name="searchInput"></input>
      <button className="search-btn" onClick={props.onClick}>search</button>
    </section>
  )
}

export default SearchForm;