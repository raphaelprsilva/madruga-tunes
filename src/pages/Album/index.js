import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Header, Loading, MusicsList } from '../../components';

import { getUser } from '../../services/userAPI';
import getMusics from '../../services/musicsAPI';

class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      user: {},
      albumData: [],
      artistData: {},
    };

    this.getUserData = this.getUserData.bind(this);
    this.getSongs = this.getSongs.bind(this);
  }

  async componentDidMount() {
    this.getUserData();
    this.getSongs();
  }

  async getUserData() {
    const userData = await getUser();
    this.setState({
      user: userData,
      loading: false,
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

  render() {
    const { loading, user, albumData, artistData } = this.state;
    const songs = albumData.filter((song, index) => index !== 0);

    return (
      <div data-testid="page-album">
        <Header user={ user } loading={ loading } />
        {
          loading ? <Loading /> : (
            <MusicsList songs={ songs } artistData={ artistData } />
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
