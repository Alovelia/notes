import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ACTION } from 'app/reducers/route-reducer';
import isEqual from 'lodash/fp/isEqual';

function WithRouterReduxParams(WrappedComponent) {
  class ParamsDispatcher extends Component {
    componentWillMount() {
      this.props.updateParams(this.props.params);
    }
    componentWillReceiveProps(nextProps) {
      if (!isEqual(this.props.params, nextProps.params)) {
        this.props.updateParams(nextProps.params);
      }
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  ParamsDispatcher.propTypes = {
    updateParams: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired
  };

  return compose(
    connect(() => ({}), { updateParams: ACTION.updateParams }),
    withRouter
  )(ParamsDispatcher);
}

export default WithRouterReduxParams;
