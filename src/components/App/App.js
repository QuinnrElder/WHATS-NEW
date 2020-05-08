import React, { Component } from 'react';
import './App.css';

import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';

import entertainment from '../../data/entertainment'
import health from '../../data/health'
import local from '../../data/local';
import science from '../../data/science'
import technology from '../../data/technology'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entertainment: entertainment,
      health: health,
      local: local,
      science: science,
      technology: technology,
      selectedTopic: local,
      searchInput: ""
    }
  }
  
  clickHandler = (e) => {
    const clickValue = e.target.name
    this.setState( { selectedTopic: this.state[clickValue] } )
  }

  searchContent = (e) => {
    const searchVal = this.state.searchInput
    const selectedTopic = this.state.selectedTopic
    const newVariable = selectedTopic.filter(topic => topic.headline.toLowerCase().includes(searchVal.toLowerCase())) 
    this.setState({ selectedTopic: newVariable, 
      searchInput: "",
    })
  }

  handleChangeEvent = (e) => {
    console.log(e.target.value)
    let { value } = e.target
    this.setState({searchInput: value})
  }

  render () {
    return (
      <div className="app">
        <SearchForm
        searchContent={this.searchContent}
        searchInput={this.state.searchInput}
        handleChangeEvent={this.handleChangeEvent}
         />
        {!this.state && <h2>We need some Articles</h2>}
        <div className="main-container">
        <Menu onClick={this.clickHandler} />
        <NewsContainer newsInfo={this.state.selectedTopic} />
        </div> 
      </div>
    );
  }
}

export default App;
