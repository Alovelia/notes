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
    const noteId = this.props.params.id;
    this.props.getNotes(noteId); // dispatch action to start ajax request for notes
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.params.id !== nextProps.params.id) {
      const noteId = nextProps.params.id;
      this.props.getNotes(noteId);
    }
  }
  render() {
    return <Notes {...this.props} />;
  }
}

NotesContainer.propTypes = {
  getNotes: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  // notes: makeSelectNotes()
});
const mapDispatchToProps = {
  getNotes: ACTION.getNotes,
  //†action
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(NotesContainer);
