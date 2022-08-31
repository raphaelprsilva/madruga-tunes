import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AudioPlayer extends Component {
  render() {
    const { trackName, previewUrl } = this.props;
    return (
      <>
        <p>{trackName}</p>
        <div>
          <audio data-testid="audio-component" src={ previewUrl } controls>
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
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
};

export default AudioPlayer;
