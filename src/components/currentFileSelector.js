import React, { Component } from 'react';
import { connect } from 'react-redux';

class CurrentFileSelector extends Component {

  render() {
    return (
      <ul className="file-selector-container">
        <li className="file-selector">{this.props.fileName}</li>
      </ul>
    )
  }
}

function mapStateToProps(state, props) {
    return {
        fileName: state.files[state.currentlyOpenFile].fileName
    };
}

export default connect(mapStateToProps, null)(CurrentFileSelector);
