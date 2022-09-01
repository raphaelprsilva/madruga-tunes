import PropTypes from 'prop-types';
import React, { Component } from 'react';

import AudioPlayer from '../AudioPlayer';
import InputFavoriteSong from '../InputFavoriteSong';
import Loading from '../Loading';

import * as S from './styled';

class MusicCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
  }

  render() {
    const {
      song: { trackName, previewUrl, trackId },
      handleFavoriteSongs,
      checked,
    } = this.props;
    const { loading } = this.state;

    return (
      <S.MusicsWrapper key={ trackId }>
        {loading ? (
          <Loading />
        ) : (
          <>
            <AudioPlayer trackName={ trackName } previewUrl={ previewUrl } />
            <InputFavoriteSong
              trackId={ trackId }
              isFavoriteSong={ checked }
              handleChange={ handleFavoriteSongs }
            />
          </>
        )}
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
  handleFavoriteSongs: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default MusicCard;
