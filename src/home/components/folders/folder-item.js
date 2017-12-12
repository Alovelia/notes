import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import Folder from 'material-ui-icons/Folder';
import { Media, MediaBody, MediaFigure } from '../../../__common__/components/media/media';


export default class FolderItem extends Component {
  render() {
    const { item } = this.props;
    return (<Media>
      <MediaFigure>
        <Folder />
      </MediaFigure>
      <MediaBody>
        <Link to={`/${item._id}`}>
          {item.title}
        </Link>
      </MediaBody>
    </Media>);
  }
}
FolderItem.propTypes = {
  item: PropTypes.object.isRequired
};
