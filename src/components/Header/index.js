import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
              <Link to="/search">
                <Image
                  imageSrc={ madrugraTunesLogo }
                  imageAlt="Logo Madruga Tunes White"
                />
              </Link>
              <Link to="/profile">
                <User user={ user } />
              </Link>
            </S.HeaderWrapper>
            <Links />
          </>
        )}
      </div>
    );
  }
}

export default Header;
