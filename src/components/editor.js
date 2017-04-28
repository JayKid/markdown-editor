import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editorActions from '../actions/editor';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const textareaContents = event.target.value;
    this.props.action.updateContents({
      fileContents: textareaContents
    });
  }

  render() {
    return (
      <div className="editor">
        <textarea
          onChange={this.handleChange}
          value={this.props.contents}
          placeholder="Write here your markdown.."></textarea>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
    return {
        contents: state.files[state.currentlyOpenFile].fileContents
    };
}
function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(editorActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Editor);
