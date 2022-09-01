import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Header, Loading, MusicsList } from '../../components';

import { addSong, removeSong, getFavoriteSongs } from '../../services/favoriteSongsAPI';
import getMusics from '../../services/musicsAPI';

class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      albumData: [],
      artistData: {},
      favoritesSongs: [],
    };

    this.getSongs = this.getSongs.bind(this);
    this.getUserFavoriteSongs = this.getUserFavoriteSongs.bind(this);
    this.handleFavoriteSongs = this.handleFavoriteSongs.bind(this);
  }

  async componentDidMount() {
    this.getSongs();
    this.getUserFavoriteSongs();
  }

  async handleFavoriteSongs(event) {
    const { target: { checked, id } } = event;
    const { albumData } = this.state;
    const song = albumData.find(({ trackId }) => trackId === +id);

    this.setState({ loading: true }, async () => {
      if (checked) {
        await addSong(song);
      } else {
        await removeSong(song);
      }
      const favoritesSongs = await getFavoriteSongs();
      this.setState({
        favoritesSongs,
        loading: false,
      });
    });
  }

  async getSongs() {
    const {
      match: { params },
    } = this.props;
    const albumId = params.id;
    const albumData = await getMusics(albumId);
    const artistData = albumData[0];
    this.setState({ albumData, artistData });
  }

  async getUserFavoriteSongs() {
    const favoritesSongs = await getFavoriteSongs();
    const hasFavorites = !favoritesSongs ? [] : favoritesSongs;
    this.setState({ favoritesSongs: hasFavorites });
  }

  render() {
    const { loading, albumData, artistData, favoritesSongs } = this.state;
    const songs = albumData.filter((song, index) => index !== 0);
    return (
      <div data-testid="page-album">
        <Header />
        {
          loading ? <Loading /> : (
            <MusicsList
              songs={ songs }
              favoritesSongs={ favoritesSongs }
              artistData={ artistData }
              handleFavoriteSongs={ this.handleFavoriteSongs }
            />
          )
        }
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Album;
