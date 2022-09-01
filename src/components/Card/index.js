import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Image from '../Image';

import * as S from './styled';

class Card extends Component {
  render() {
    const { album } = this.props;
    const { collectionName, artworkUrl100, artistName } = album;
    return (
      <S.CardWrapper>
        <Image
          imageAlt={ `${collectionName} album cover` }
          imageSrc={ artworkUrl100 }
        />
        <S.AttributesWrapper>
          <p data-testid="album-name">{collectionName}</p>
          <p data-testid="artist-name">{artistName}</p>
        </S.AttributesWrapper>
      </S.CardWrapper>
    );
  }
}

Card.propTypes = {
  album: PropTypes.shape({
    artistName: PropTypes.string,
    artworkUrl100: PropTypes.string,
    collectionName: PropTypes.string,
  }).isRequired,
};

export default Card;
