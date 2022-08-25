import PropTypes from 'prop-types';
import React, { Component } from 'react';

import * as S from './styled';

class MusicCard extends Component {
  render() {
    const { song } = this.props;
    return (
      <S.MusicsWrapper data-testid="audio-component" key={ song.trackId }>
        <p>{song.trackName}</p>
        <audio data-testid="audio-component" src={ song.previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>
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
