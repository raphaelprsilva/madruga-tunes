import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Card from '../Card';

import * as S from './styled';

class Cards extends Component {
  render() {
    const { albums } = this.props;
    return (
      <S.CardsWrapper>
        {albums.map((album) => (
          <Link
            data-testid={ `link-to-album-${album.collectionId}` }
            to={ `/album/${album.collectionId}` }
            key={ `${album.artistId}-${album.collectionId}` }
          >
            <Card album={ album } />
          </Link>
        ))}
      </S.CardsWrapper>
    );
  }
}

Cards.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.shape({
    map: PropTypes.func,
    collectionId: PropTypes.number,
    artistId: PropTypes.number,
  })).isRequired,
};

export default Cards;
