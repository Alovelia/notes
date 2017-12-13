import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import InsertDriveFile from 'material-ui-icons/InsertDriveFile';
import { Media, MediaFigure, MediaBody } from 'common/components/media/media';

export default class CardComponent extends Component {
  render() {
    const { item } = this.props;
    return (<Grid item md={3} sm={6} xs={12}>
      <Card >
        <Media>
          <MediaFigure>
            <InsertDriveFile />
          </MediaFigure>
          <MediaBody>
            <Typography type="body2">
              <Link to={`/5a2534d0ee36774ede668477/${item._id}`}>
                {item.title}
              </Link>
            </Typography>
          </MediaBody>
        </Media>
      </Card>
    </Grid>
    );
  }
}


CardComponent.propTypes = {
  item: PropTypes.object.isRequired
};
