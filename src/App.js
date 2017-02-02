import React, { Component } from 'react';
import logo from './assets/images/iDevCodeRed.png';
import './styles/App.scss';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero links={[{title: 'experience', key: '1', ref: '#'}, {title: 'bots', key: '2', ref: '#'}, {title: 'skills', key: '3', ref: '#skills'}, {title: 'about', key: '4', ref: '#about'}]}/>
        <About />
        <Skills/>
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
