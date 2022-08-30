import PropTypes from 'prop-types';
import React, { Component } from 'react';

import * as S from './styled';

class MusicCard extends Component {
  render() {
    const { song } = this.props;
    return (
      <S.MusicsWrapper key={ song.trackId }>
        <p>{song.trackName}</p>
        <div>
          <audio data-testid="audio-component" src={ song.previewUrl } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            <code>audio</code>
            .
          </audio>
        </div>
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
