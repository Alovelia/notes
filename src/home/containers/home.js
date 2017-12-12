import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import Home from '../components/layout/home';
import { ACTION } from '../reducer';
import { makeSelectFolders } from '../selectors';

export class HomeContainer extends Component {
  componentDidMount() {
    this.props.get(); // dispatch action to start ajax request for folders
  }
  render() {
    return <Home {...this.props} />;
  }
}

HomeContainer.propTypes = {
  get: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  folders: makeSelectFolders()
});
const mapDispatchToProps = {
  get: ACTION.get,
  //†action
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(HomeContainer);

