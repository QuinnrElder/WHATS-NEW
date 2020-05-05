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
      entertainment: entertainment.entertainment,
      health: health.health,
      local: local.local,
      science: science.science,
      technology: technology.technology,
    }
  }

  render () {
    return (
      <div className="app">
        <Menu newsInfo={this.state} />
        <NewsContainer newsInfo={this.state} />
      </div>
    );
  }
}

export default App;
