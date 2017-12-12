import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import CreateNewFolder from 'material-ui-icons/CreateNewFolder';
import { Media, MediaFigure, MediaBody } from 'common/components/media/media';
import FolderItem from './folder-item';


class Folders extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={3}>
          <Media>
            <MediaBody>
              <Typography type="title">
                <FormattedMessage id="home.folders" />
              </Typography>
            </MediaBody>
            <MediaFigure>
              <CreateNewFolder />
            </MediaFigure>
          </Media>
        </Grid>
        <Grid item xs={12}>
          {this.props.folders.map(item => (<FolderItem item={item} key={item._id} />))}
        </Grid>
      </Grid>);
  }
}

Folders.propTypes = {
  folders: PropTypes.array.isRequired
};

export default Folders;

