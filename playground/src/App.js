import React, { Component } from 'react';
import Kowalski from 'kowalski';
import DATA from './data';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Kowalski appName="Kowalski Playground" data={DATA.tax} allowSelectChart />
      </div>
    );
  }
}

export default App;
