import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import './home.css';

export default class HomeComponent extends Component {
  render() {
    return (<div className="clearfix">
      <div className="folders">FOLDERS</div>
      <div className="notes">NOTES</div>
    </div>);
  }
}

