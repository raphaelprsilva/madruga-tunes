import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';
import MusicCard from '../MusicCard';

import * as S from './styled';

class MusicsList extends Component {
  render() {
    const { songs, artistData } = this.props;
    return (
      <S.MusicListWrapper>
        <>
          <Card album={ artistData } />
          <S.SongsWrapper>
            {
              songs.map((song) => (
                <MusicCard
                  song={ song }
                  key={ song.trackId }
                />
              ))
            }
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
};

export default MusicsList;
