import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import Folders from '../components/folders/folders';
import { ACTION } from '../reducer';
import { makeSelectFolders } from '../selectors';

export class FoldersContainer extends Component {
  componentDidMount() {
    this.props.get(); // dispatch action to start ajax request for folders
  }
  render() {
    return <Folders {...this.props} />;
  }
}

FoldersContainer.propTypes = {
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
)(FoldersContainer);

