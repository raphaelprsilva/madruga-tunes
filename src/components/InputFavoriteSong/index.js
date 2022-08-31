import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

class InputFavoriteSong extends Component {
  render() {
    const { trackId, inputFavoriteSong, handleChange } = this.props;
    return (
      <S.FavoriteWrapper>
        <S.LabelWrapper htmlFor={ trackId }>
          Favorita
          <input
            onChange={ handleChange }
            checked={ inputFavoriteSong }
            data-testid={ `checkbox-music-${trackId}` }
            type="checkbox"
            name="inputFavoriteSong"
            id={ trackId }
          />
        </S.LabelWrapper>
      </S.FavoriteWrapper>
    );
  }
}

InputFavoriteSong.propTypes = {
  trackId: PropTypes.number.isRequired,
  inputFavoriteSong: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputFavoriteSong;
