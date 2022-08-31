import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AudioPlayer extends Component {
  render() {
    const { song } = this.props;
    return (
      <>
        <p>{song.trackName}</p>
        <div>
          <audio data-testid="audio-component" src={ song.previewUrl } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            <code>audio</code>
            .
          </audio>
        </div>
      </>
    );
  }
}

AudioPlayer.propTypes = {
  song: PropTypes.shape({
    trackName: PropTypes.string,
    previewUrl: PropTypes.string,
  }).isRequired,
};

export default AudioPlayer;
