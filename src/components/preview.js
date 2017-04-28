import React, { Component } from 'react';
import { connect } from 'react-redux';
let marked = require('marked');

class Preview extends Component {

  render() {
    const markdownPreview = marked(this.props.contents);
    return (
      <div className="preview">
        <div dangerouslySetInnerHTML={{ __html: markdownPreview }}></div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        contents: state.files[state.currentlyOpenFile].fileContents
    };
}

export default connect(mapStateToProps, null)(Preview);
