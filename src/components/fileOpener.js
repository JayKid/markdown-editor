import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as fileOpenerActions from '../actions/fileOpener';

class FileOpener extends Component {

  handleChange = event => {
    const files = event.target.files;
    if (files.length > 1) {
      window.alert('Only open one file pls! (:');
      return;
    }
    let fileReader = new FileReader();
    var self = this;
    fileReader.onload = function () {
      const fileContents = this.result;
      self.props.action.openFileContents(fileContents);
    };
    fileReader.onerror = function () {
      window.alert('Sorry, there was an error opening your file');
    };
    fileReader.readAsText(files[0]);
  }

  render() {
    return (
      <div className="uploader">
        <h2>Open File</h2>
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
        action: bindActionCreators(fileOpenerActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(FileOpener);
