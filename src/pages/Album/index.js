import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Header, Loading, MusicsList } from '../../components';

import { getUser } from '../../services/userAPI';
import getMusics from '../../services/musicsAPI';

class Album extends Component {
  mounted = false;

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      user: {},
      artistData: null,
      songs: null,
    };

    this.getSongs = this.getSongs.bind(this);
  }

  async componentDidMount() {
    this.mounted = true;
    this.setState({ loading: true }, async () => {
      const { songs, artistData } = await this.getSongs();
      const user = await getUser();
      if (this.mounted) {
        this.setState({
          loading: false,
          user,
          songs,
          artistData,
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  async getSongs() {
    const {
      match: { params },
    } = this.props;
    const albumId = params.id;
    const albumData = await getMusics(albumId);
    const artistData = albumData[0];
    albumData.splice(0, 1);
    const songs = albumData;
    return {
      songs,
      artistData,
    };
  }

  render() {
    const { loading, user, artistData, songs } = this.state;
    return (
      <div data-testid="page-album">
        {loading ? (
          <Loading />
        ) : (
          <>
            <Header user={ user } />
            <MusicsList songs={ songs } artistData={ artistData } />
          </>
        )}
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
