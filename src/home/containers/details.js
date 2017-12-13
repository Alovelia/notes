import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import Details from '../components/details/details';
import { ACTION } from '../reducer';
// import { makeSelectDetails } from '../selectors';

export class DetailsContainer extends Component {
  componentDidMount() {
    const noteId = this.props.params.noteid;
    // this.props.getDetails(noteId); // dispatch action to start ajax request for notes
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.params.noteid !== nextProps.params.noteid) {
      const noteId = nextProps.params.noteid;
      // this.props.getDetails(noteId);
    }
  }
  render() {
    return <Details {...this.props} />;
  }
}

DetailsContainer.propTypes = {
  getDetails: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  // notes: makeSelectDetails()
});

const mapDispatchToProps = {
  // getDetails: ACTION.getDetails,
  //†action
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(DetailsContainer);
