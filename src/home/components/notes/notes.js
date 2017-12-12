import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import NoteAdd from 'material-ui-icons/NoteAdd';
import PropTypes from 'prop-types';
import Card from './card';
import { Media, MediaFigure, MediaBody } from '../../../__common__/components/media/media';


class Notes extends Component {
  render() {
    return (<Grid container>
      <Grid item xs={1}>
        <Media>
          <MediaBody>
            <Typography type="title">
              <FormattedMessage id="home.notes" />
            </Typography>
          </MediaBody>
          <MediaFigure>
            <NoteAdd />
          </MediaFigure>
        </Media>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          {this.props.notes.map(item => (<Card item={item} key={item._id} />))}
        </Grid>
      </Grid>
    </Grid>);
  }
}

Notes.propTypes = {
  notes: PropTypes.array.isRequired
};

export default Notes;
