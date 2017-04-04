import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editorActions from '../actions/editor';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    // React event weirdness requires storing
    // the synthetic event
    const textareaContents = event.target.value;
    this.props.action.updateContents(textareaContents);
  }

  render() {
    return (
      <textarea
        onChange={this.handleChange}
        value={this.props.contents}
        placeholder="Write here your markdown.."></textarea>
    )
  }
}

function mapStateToProps(state, props) {
    return {
        contents: state.editor
    };
}
function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(editorActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Editor);
