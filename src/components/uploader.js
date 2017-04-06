import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as uploaderActions from '../actions/uploader';

class Uploader extends Component {

  handleChange = event => {
    const files = event.target.files;
    if (files.length > 1) {
      window.alert('Only upload one file pls! (:');
      return;
    }
    let fileReader = new FileReader();
    var self = this;
    fileReader.onload = function () {
      const fileContents = this.result;
      self.props.action.uploadContents(fileContents);
    };
    fileReader.onerror = function () {
      window.alert('Sorry, there was an error uploading your file');
    };
    fileReader.readAsText(files[0]);
  }

  render() {
    return (
      <div className="uploader">
        <input type="file"  onChange={this.handleChange} />
      </div>
    )
  }
}

function mapStateToProps(state, props) {
    return {
        contents: state.contents
    };
}
function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(uploaderActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Uploader);
