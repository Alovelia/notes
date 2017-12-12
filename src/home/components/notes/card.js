import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import InsertDriveFile from 'material-ui-icons/InsertDriveFile';
import { Media, MediaFigure, MediaBody } from 'common/components/media/media';

export default class Note extends Component {
  render() {
    return (<Grid item md={3} sm={6} xs={12}>
      <Card >
        <Media>
          <MediaFigure>
            <InsertDriveFile />
          </MediaFigure>
          <MediaBody>
            <Typography type="body2">{this.props.item.title}</Typography>
          </MediaBody>
        </Media>
      </Card>
    </Grid>
    );
  }
}


Note.propTypes = {
  item: PropTypes.object.isRequired
};
