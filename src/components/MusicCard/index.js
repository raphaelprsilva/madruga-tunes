import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { addSong } from '../../services/favoriteSongsAPI';
import Loading from '../Loading';

import * as S from './styled';

class MusicCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      inputFavoriteSong: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange({ target }) {
    const { name } = target;
    const { song } = this.props;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      loading: true,
      [name]: value,
    });

    await addSong(song.trackId);
    this.setState({ loading: false });
  }

  render() {
    const { song } = this.props;
    const { inputFavoriteSong, loading } = this.state;

    return (
      <S.MusicsWrapper key={ song.trackId }>
        {
          loading ? <Loading /> : (
            <>
              <p>{song.trackName}</p>
              <div>
                <audio data-testid="audio-component" src={ song.previewUrl } controls>
                  <track kind="captions" />
                  O seu navegador não suporta o elemento
                  <code>audio</code>
                  .
                </audio>
              </div>
              <div>
                <label htmlFor={ song.trackId }>
                  Favorita
                  <input
                    onChange={ this.handleChange }
                    checked={ inputFavoriteSong }
                    data-testid={ `checkbox-music-${song.trackId}` }
                    type="checkbox"
                    name="inputFavoriteSong"
                    id={ song.trackId }
                  />
                </label>
              </div>
            </>
          )
        }
      </S.MusicsWrapper>
    );
  }
}

MusicCard.propTypes = {
  song: PropTypes.shape({
    previewUrl: PropTypes.string,
    trackId: PropTypes.number,
    trackName: PropTypes.string,
  }).isRequired,
};

export default MusicCard;
