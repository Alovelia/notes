import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { FormattedMessage } from 'react-intl';
import './home.css';
import Folders from '../../containers/folders';


class HomeComponent extends Component {
  state = {
    spacing: 16
  };
  render() {
    // const spacing = this.state.spacing;
    const { spacing } = this.state; // object destruction
    // console.info(this.props.folders);
    return (
      <div style={{ padding: `${spacing / 2}px` }}><Grid container spacing={spacing}>
        <Grid item xs={3}>
          <Folders />
        </Grid>
        <Grid item xs={9}>
          {this.props.children}
        </Grid>
      </Grid></div>
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
