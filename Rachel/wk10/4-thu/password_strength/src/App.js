import React, { Component } from 'react';
import PasswordInput from './PasswordInput'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PasswordInput minCharLength="8"/>
      </div>
    );
  }
}

export default App;
