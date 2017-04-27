import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as fileOpenerActions from '../actions/fileOpener';

class FileOpener extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const files = event.target.files;
    if (files.length > 1) {
      window.alert('Only open one file pls! (:');
      return;
    }
    let fileReader = new FileReader();

    fileReader.onload = function (event) {
      const fileContents = event.srcElement.result;
      this.props.action.openFileContents(fileContents);
    }.bind(this);

    fileReader.onerror = function () {
      window.alert('Sorry, there was an error opening your file');
    };
    fileReader.readAsText(files[0]);
  }

  render() {
    return (
      <div className="uploader">
        <h2>Open File</h2>
        <input type="file" onChange={this.handleChange} />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(fileOpenerActions, dispatch)
    };
}
export default connect(null, mapDispatchToProps)(FileOpener);
