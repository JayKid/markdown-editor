import React, { Component } from 'react';
import Preview from './components/preview';
import Editor from './components/editor';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Markdown Editor</h2>
        </div>
        <div className="App-intro">
          <Editor />
          <Preview />
        </div>
      </div>
    );
  }
}

export default App;
