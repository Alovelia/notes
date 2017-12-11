import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Grid from 'material-ui/Grid';
import NoteAdd from 'material-ui-icons/NoteAdd';
import PropTypes from 'prop-types';
import Note from './note';


class Notes extends Component {
  render() {
    return (<div>
      <div><FormattedMessage id="home.notes" /><NoteAdd /></div>
      <Grid container spacing={24}>
        {this.props.notes.map(item => (<Note item={item} key={item._id} />))}
      </Grid>
    </div>);
  }
}

Notes.propTypes = {
  notes: PropTypes.array.isRequired
};

export default Notes;
