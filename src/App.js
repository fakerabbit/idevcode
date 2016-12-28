import React, { Component } from 'react';
import logo from './assets/images/iDevCodeRed.png';
import './styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
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
