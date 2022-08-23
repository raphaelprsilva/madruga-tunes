import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Cards from '../Cards';

import * as S from './styled';

class Albums extends Component {
  render() {
    const { albums, searchedFor } = this.props;
    return (
      <S.AlbumsWrapper>
        {albums.length > 0 ? (
          <>
            <span>{`Resultado de álbuns de: ${searchedFor}`}</span>
            <Cards albums={ albums } />
          </>
        ) : (
          <span>
            {!searchedFor ? '' : <span>Nenhum álbum foi encontrado</span>}
          </span>
        )}
      </S.AlbumsWrapper>
    );
  }
}

Albums.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.shape({
    length: PropTypes.number,
  })).isRequired,
  searchedFor: PropTypes.string.isRequired,
};

export default Albums;
