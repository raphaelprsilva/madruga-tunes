import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import madrugraTunesLogo from '../../images/madruga_tunes_logo_white.svg';

import * as S from './styled';

import Image from '../Image';
import User from '../User';
import Links from '../Links';
import Loading from '../Loading';

import { getUser } from '../../services/userAPI';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      loading: false,
    };

    this.getUserData = this.getUserData.bind(this);
  }

  componentDidMount() {
    this.getUserData();
  }

  async getUserData() {
    this.setState({ loading: true }, async () => {
      const userData = await getUser();
      this.setState({
        loading: false,
        user: userData,
      });
    });
  }

  render() {
    const { user, loading } = this.state;
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
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
        )}
      </div>
    );
  }
}

// Header.propTypes = {
//   user: PropTypes.shape({
//     description: PropTypes.string,
//     email: PropTypes.string,
//     image: PropTypes.string,
//     name: PropTypes.string,
//   }).isRequired,
// };

export default Header;
