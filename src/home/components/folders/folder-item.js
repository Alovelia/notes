import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import Folder from 'material-ui-icons/Folder';

export default class FolderItem extends Component {
  render() {
    const { item } = this.props;
    return (<div>
      <Folder />
      <Link to={`/${item._id}`}>
        {item.title}
      </Link>
    </div>);
  }
}
FolderItem.propTypes = {
  item: PropTypes.object.isRequired
};
