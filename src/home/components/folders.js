import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Folders extends Component {
  render() {
    return (<div>
      {this.props.folders.map(item => <div key={item._id}>{item.title}</div>)}
    </div>);
  }
}

Folders.propTypes = {
  folders: PropTypes.array.isRequired
};

export default Folders;
