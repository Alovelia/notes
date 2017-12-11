import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { FormattedMessage } from 'react-intl';
import './home.css';
import Folders from '../containers/folders';


class HomeComponent extends Component {
  render() {
    // console.info(this.props.folders);
    return (
      <Grid container>
        <Grid item xs={3}>
          <Folders />
        </Grid>
        <Grid item xs={9}>
          { this.props.children }
        </Grid>
      </Grid>
    );
  }
}

HomeComponent.propTypes = {
  children: PropTypes.node
};

HomeComponent.defaultProps = {
  children: null
};

export default HomeComponent;
