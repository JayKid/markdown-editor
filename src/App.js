import React, { Component } from 'react';
import Preview from './components/preview';
import Editor from './components/editor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Markdown Editor</h1>
        </header>
        <main>
          <Editor />
          <Preview />
        </main>
      </div>
    );
  }
}

export default App;
