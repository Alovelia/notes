import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './media.css';

function renderChild(node, i) {
  if (node.type.name === 'MediaFigure' && i !== 0) {
    const className = cx(node.props.className, 'Media__figure--right');
    return React.cloneElement(node, { className });
  }
  return node;
}

export const Media = props => (
  <div className="Media">
    {React.Children.map(props.children, renderChild)}
  </div>);

Media.propTypes = {
  children: PropTypes.node.isRequired
};

export const MediaFigure = props => (
  <div className={cx('Media__figure', props.className)}>
    {props.children}
  </div>);

MediaFigure.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

MediaFigure.defaultProps = {
  className: null
};

export const MediaBody = props => (
  <div className="Media__body">
    {props.children}
  </div>);

MediaBody.propTypes = {
  children: PropTypes.node.isRequired
};

