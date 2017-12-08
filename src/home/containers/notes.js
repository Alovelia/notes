import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import Notes from '../components/notes';
import { ACTION } from '../reducer';
// import { makeSelectNotes } from '../selectors';

export class NotesContainer extends Component {
  componentDidMount() {
    // this.props.get(); // dispatch action to start ajax request for notes
  }
  render() {
    return <Notes {...this.props} />;
  }
}

NotesContainer.propTypes = {
  // get: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  // notes: makeSelectNotes()
});
const mapDispatchToProps = {
  // get: ACTION.get,
  //†action
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(NotesContainer);
