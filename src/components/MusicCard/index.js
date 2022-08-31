import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { addSong, getFavoriteSongs, removeSong } from '../../services/favoriteSongsAPI';

import AudioPlayer from '../AudioPlayer';
import InputFavoriteSong from '../InputFavoriteSong';
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
    this.getSavedSongs = this.getSavedSongs.bind(this);
  }

  componentDidMount() {
    this.getSavedSongs();
  }

  async handleChange({ target }) {
    const { name } = target;
    const { song } = this.props;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, async () => {
      if (value) {
        this.setState({ loading: true });
        await addSong(song);
        this.setState({ loading: false });
      } else {
        this.setState({ loading: true });
        await removeSong(song);
        this.setState({ loading: false });
      }
    });
  }

  async getSavedSongs() {
    const { song: { trackId } } = this.props;
    this.setState({ loading: true }, async () => {
      const favoritesSongsIds = await getFavoriteSongs();
      this.setState({ loading: false });

      favoritesSongsIds.forEach((song) => {
        if (song.trackId === trackId) {
          this.setState({ inputFavoriteSong: true });
        }
      });
    });
  }

  render() {
    const { song: { trackName, previewUrl, trackId } } = this.props;
    const { inputFavoriteSong, loading } = this.state;

    return (
      <S.MusicsWrapper key={ trackId }>
        {
          loading ? <Loading /> : (
            <>
              <AudioPlayer trackName={ trackName } previewUrl={ previewUrl } />
              <InputFavoriteSong
                trackId={ trackId }
                inputFavoriteSong={ inputFavoriteSong }
                handleChange={ this.handleChange }
              />
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
