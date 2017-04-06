import React, { Component } from 'react';
import { connect } from 'react-redux';

class FileSaver extends Component {

  constructor(props) {
    super(props);
    this.saveToFile = this.saveToFile.bind(this);
  }

  saveToFile = _ => {
    const fileProperties = {
      fileName: 'myfile.md',
      contentType: 'text/plain'
    };

    const triggerClickOn = function(node) {
			let event = new MouseEvent("click");
			node.dispatchEvent(event);
    };

    let document = window.document;
    let anchor = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
    const blob = new Blob([this.props.contents], { type: fileProperties.contentType} );
    anchor.href = URL.createObjectURL(blob);
    anchor.download = fileProperties.fileName;
    triggerClickOn(anchor);
  }

  render() {
    return (
      <div className="saver">
        <h2>Save File</h2>
        <button type="submit" onClick={this.saveToFile}>Save to..</button>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
    return {
        contents: state.contents
    };
}

export default connect(mapStateToProps, null)(FileSaver);
