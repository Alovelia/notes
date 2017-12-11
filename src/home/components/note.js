import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import InsertDriveFile from 'material-ui-icons/InsertDriveFile';

export default class Note extends Component {
  render() {
    return (<Grid item xs={3}>
      <InsertDriveFile />{this.props.item.title}
    </Grid>);
  }
}


Note.propTypes = {
  item: PropTypes.object.isRequired
};
