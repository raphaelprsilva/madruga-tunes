import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    const { imageSrc, imageAlt } = this.props;
    return <img src={ imageSrc } alt={ imageAlt } />;
  }
}

Image.defaultProps = {
  imageAlt: '',
  imageSrc: '',
};

Image.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
};

export default Image;
