import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import Home from '../components/home';
import { ACTION } from '../reducer';
// import { makeSelectUsername } from '../selectors';

export class HomeContainer extends Component {
  componentDidMount() {
    // ajax
    this.props.get();
  }
  render() {
    return <Home {...this.props} />;
  }
}

HomeContainer.propTypes = {
  get: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({});
const mapDispatchToProps = {
  get: ACTION.get,
  //†action
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(HomeContainer);

