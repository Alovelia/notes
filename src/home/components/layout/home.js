import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { FormattedMessage } from 'react-intl';
import Folders from '../../containers/folders';
import './home.css';

class HomeComponent extends Component {
  state = {
    spacing: 16
  };
  render() {
    // const spacing = this.state.spacing;
    const { spacing } = this.state; // object destruction
    return (
      <div style={{ padding: `${spacing / 2}px` }} id="wrapper">
        <Grid
          container
          spacing={spacing}
        >
          <Grid item xs={4} sm={3} id="id1">
            <Folders />
          </Grid>
          <Grid item xs={2} sm={3} id="id2">
            {this.props.notes}
          </Grid>
          <Grid item xs={6} sm={6}>
            {this.props.details}
          </Grid>
        </Grid></div>
    );
  }
}

HomeComponent.propTypes = {
  // children: PropTypes.node
  notes: PropTypes.node,
  details: PropTypes.node,
};

HomeComponent.defaultProps = {
  // children: null,
  notes: null,
  details: null,
};

export default HomeComponent;
