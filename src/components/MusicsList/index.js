import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';
import MusicCard from '../MusicCard';

import * as S from './styled';

class MusicsList extends Component {
  render() {
    const { songs, artistData, handleFavoriteSongs, favoritesSongs } = this.props;
    return (
      <S.MusicListWrapper>
        <>
          <Card album={ artistData } />
          <S.SongsWrapper>
            {songs.map((song) => (
              <MusicCard
                checked={ favoritesSongs
                  .some((favoriteSong) => +favoriteSong.trackId === +song.trackId) }
                song={ song }
                key={ song.trackId }
                handleFavoriteSongs={ handleFavoriteSongs }
              />
            ))}
          </S.SongsWrapper>
        </>
      </S.MusicListWrapper>
    );
  }
}

MusicsList.propTypes = {
  artistData: PropTypes.shape({
    amgArtistId: PropTypes.number,
    artistId: PropTypes.number,
    artistName: PropTypes.string,
    artistViewUrl: PropTypes.string,
    artworkUrl60: PropTypes.string,
    artworkUrl100: PropTypes.string,
    collectionCensoredName: PropTypes.string,
    collectionExplicitness: PropTypes.string,
    collectionId: PropTypes.number,
    collectionName: PropTypes.string,
    collectionPrice: PropTypes.number,
    collectionType: PropTypes.string,
    collectionViewUrl: PropTypes.string,
    copyright: PropTypes.string,
    country: PropTypes.string,
    currency: PropTypes.string,
    primaryGenreName: PropTypes.string,
    releaseDate: PropTypes.string,
    trackCount: PropTypes.number,
    wrapperType: PropTypes.string,
  }).isRequired,
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      length: PropTypes.number,
      map: PropTypes.func,
    }),
  ).isRequired,
  handleFavoriteSongs: PropTypes.func.isRequired,
  favoritesSongs: PropTypes.arrayOf(
    PropTypes.shape({
      artistId: PropTypes.number,
      artistName: PropTypes.string,
      artistViewUrl: PropTypes.string,
      artworkUrl30: PropTypes.string,
      artworkUrl60: PropTypes.string,
      artworkUrl100: PropTypes.string,
      collectionCensoredName: PropTypes.string,
      collectionExplicitness: PropTypes.string,
      collectionId: PropTypes.number,
      collectionName: PropTypes.string,
      collectionPrice: PropTypes.number,
      collectionViewUrl: PropTypes.string,
      country: PropTypes.string,
      currency: PropTypes.string,
      discCount: PropTypes.number,
      discNumber: PropTypes.number,
      isStreamable: PropTypes.bool,
      kind: PropTypes.string,
      previewUrl: PropTypes.string,
      primaryGenreName: PropTypes.string,
      releaseDate: PropTypes.string,
      trackCensoredName: PropTypes.string,
      trackCount: PropTypes.number,
      trackExplicitness: PropTypes.string,
      trackId: PropTypes.number,
      trackName: PropTypes.string,
      trackNumber: PropTypes.number,
      trackPrice: PropTypes.number,
      trackTimeMillis: PropTypes.number,
      trackViewUrl: PropTypes.string,
      wrapperType: PropTypes.string,
    }),
  ).isRequired,
};

export default MusicsList;
