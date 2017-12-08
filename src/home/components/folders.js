import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class Folders extends Component {
  render() {
    return (<div>
      {this.props.folders.map((item) => {
        return (<div key={item._id}>
          <Link to={`/${item._id}`}>
            {item.title}
          </Link></div>);
      }
      )}
    </div>);
  }
}

Folders.propTypes = {
  folders: PropTypes.array.isRequired
};

export default Folders;

