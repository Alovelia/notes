import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import Folder from 'material-ui-icons/Folder';
import CreateNewFolder from 'material-ui-icons/CreateNewFolder';


class Folders extends Component {
  render() {
    return (<div>
      <div><FormattedMessage id="home.folders" /> <CreateNewFolder /></div>
      {this.props.folders.map((item) => {
        return (<div key={item._id}>  <Folder />
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

