import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

class InputFavoriteSong extends Component {
  render() {
    const { trackId, isFavoriteSong, handleChange } = this.props;
    return (
      <S.FavoriteWrapper>
        <S.Label htmlFor={ trackId }>Favorita</S.Label>
        <S.Input
          onChange={ handleChange }
          checked={ isFavoriteSong }
          data-testid={ `checkbox-music-${trackId}` }
          type="checkbox"
          name="isFavoriteSong"
          id={ trackId }
        />
      </S.FavoriteWrapper>
    );
  }
}

InputFavoriteSong.propTypes = {
  trackId: PropTypes.number.isRequired,
  isFavoriteSong: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputFavoriteSong;
