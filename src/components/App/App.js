import React, { Component } from 'react';
import './App.css';

import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';

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
      selectedTopic: local
    }
  }
  
  clickHandler = (e) => {
    const clickValue = e.target.className
    this.setState( {selectedTopic: this.state[clickValue] } )
  }

  render () {
    return (
      <div className="app">
        <Menu onClick={this.clickHandler} />
        <NewsContainer newsInfo={this.state.selectedTopic} />
      </div>
    );
  }
}

export default App;
