import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

class InputFavoriteSong extends Component {
  render() {
    const { song, inputFavoriteSong, handleChange } = this.props;
    return (
      <S.FavoriteWrapper>
        <S.LabelWrapper htmlFor={ song.trackId }>
          Favorita
          <input
            onChange={ handleChange }
            checked={ inputFavoriteSong }
            data-testid={ `checkbox-music-${song.trackId}` }
            type="checkbox"
            name="inputFavoriteSong"
            id={ song.trackId }
          />
        </S.LabelWrapper>
      </S.FavoriteWrapper>
    );
  }
}

InputFavoriteSong.propTypes = {
  song: PropTypes.shape({
    trackId: PropTypes.number,
  }).isRequired,
  inputFavoriteSong: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputFavoriteSong;
