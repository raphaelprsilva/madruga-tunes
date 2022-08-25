import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Image from '../Image';

import * as S from './styled';

class Card extends Component {
  render() {
    const { album } = this.props;
    return (
      <S.CardWrapper>
        <Image
          imageAlt={ `${album.collectionName} album cover` }
          imageSrc={ album.artworkUrl100 }
        />
        <S.AttributesWrapper>
          <p data-testid="album-name">{album.collectionName}</p>
          <p data-testid="artist-name">{album.artistName}</p>
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
