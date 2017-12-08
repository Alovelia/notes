import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import './home.css';
import Folders from '../containers/folders';

class HomeComponent extends Component {
  render() {
    // console.info(this.props.folders);
    return (<div className="clearfix">
      <div className="folders"><Folders /></div>
      <div className="notes">
        { this.props.children }
      </div>
    </div>);
  }
}

HomeComponent.propTypes = {
  children: PropTypes.node
};

HomeComponent.defaultProps = {
  children: null
};

export default HomeComponent;
