import React, { Component } from 'react';
import Preview from './components/preview';
import Editor from './components/editor';
import FileOpener from './components/fileOpener';
import FileSaver from './components/fileSaver';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Markdown Editor</h1>
        </header>
        <div className="action-bar">
          <FileOpener />
          <FileSaver />
        </div>
        <main>
          <Editor />
          <Preview />
        </main>
      </div>
    );
  }
}

export default App;
