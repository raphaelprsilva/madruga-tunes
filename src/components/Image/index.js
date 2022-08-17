import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    const { imageSrc, imageAlt } = this.props;
    return <img src={ imageSrc } alt={ imageAlt } />;
  }
}

Image.propTypes = {
  imageAlt: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default Image;
