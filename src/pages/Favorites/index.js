import React, { Component } from 'react';

import { Header, Loading } from '../../components';
import MusicCard from '../../components/MusicCard';

import {
  addSong,
  getFavoriteSongs,
  removeSong,
} from '../../services/favoriteSongsAPI';

import * as S from './styled';

class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingFavoriteSongs: false,
      userFavoriteSongs: [],
    };

    this.getSavedSongs = this.getSavedSongs.bind(this);
    this.handleFavoriteSongs = this.handleFavoriteSongs.bind(this);
  }

  componentDidMount() {
    this.getSavedSongs();
  }

  async handleFavoriteSongs(event) {
    const {
      target: { checked, id },
    } = event;
    const { userFavoriteSongs } = this.state;
    const song = userFavoriteSongs.find(({ trackId }) => trackId === +id);

    this.setState({ loadingFavoriteSongs: true }, async () => {
      if (checked) {
        await addSong(song);
      } else {
        await removeSong(song);
      }
      const favoritesSongs = await getFavoriteSongs();
      this.setState({
        userFavoriteSongs: favoritesSongs,
        loadingFavoriteSongs: false,
      });
    });
  }

  async getSavedSongs() {
    this.setState({ loadingFavoriteSongs: true });
    const savedSongs = await getFavoriteSongs();
    this.setState({
      userFavoriteSongs: savedSongs,
      loadingFavoriteSongs: false,
    });
  }

  render() {
    const { loadingFavoriteSongs, userFavoriteSongs } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        {loadingFavoriteSongs ? (
          <Loading />
        ) : (
          <S.FavoritesWrapper>
            {
              userFavoriteSongs.map((userFavoriteSong) => (
                <MusicCard
                  song={ userFavoriteSong }
                  key={ userFavoriteSong.trackId }
                  checked={ userFavoriteSongs.some(
                    (favoriteSong) => +favoriteSong.trackId === +userFavoriteSong.trackId,
                  ) }
                  handleFavoriteSongs={ this.handleFavoriteSongs }
                />
              ))
            }
          </S.FavoritesWrapper>
        )}
      </div>
    );
  }
}

export default Favorites;
