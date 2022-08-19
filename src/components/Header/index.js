import React, { Component } from 'react';
import PropTypes from 'prop-types';

import madrugraTunesLogo from '../../images/madruga_tunes_logo_white.svg';

import * as S from './styled';

import Image from '../Image';
import User from '../User';
import Links from '../Links';

class Header extends Component {
  render() {
    const { user } = this.props;
    return (
      <>
        <S.HeaderWrapper data-testid="header-component">
          <Image
            imageSrc={ madrugraTunesLogo }
            imageAlt="Logo Madruga Tunes White"
          />
          <User user={ user } />
        </S.HeaderWrapper>
        <Links />
      </>
    );
  }
}

Header.propTypes = {
  user: PropTypes.shape({
    description: PropTypes.string,
    email: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default Header;
