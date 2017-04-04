import React, { Component } from 'react';
import { connect } from 'react-redux';

class Preview extends Component {

  render() {
    const contents = this.props.contents;
    return (
      <div className="Preview">
        <p>{contents}</p>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        contents: state.editor
    };
}

export default connect(mapStateToProps, null)(Preview);
