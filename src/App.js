import React, { Component } from 'react';
import logo from './assets/images/iDevCodeRed.png';
import './styles/App.scss';

import Hero from './components/Hero';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero links={[{title: 'skills', key: '1', ref: '#'}, {title: 'experience', key: '2', ref: '#'}, {title: 'explore', key: '3', ref: '#'}, {title: 'contact', key: '4', ref: '#'}]}/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="App-footer">
          © 2016 iDevCode
        </div>
      </div>
    );
  }
}

export default App;
