import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as S from './styled';

class Links extends Component {
  render() {
    return (
      <S.LinksWrapper>
        <Link to="/search" data-testid="link-to-search">
          Pesquisa
        </Link>
        <Link to="/favorites" data-testid="link-to-favorites">
          Favoritas
        </Link>
        <Link to="/profile" data-testid="link-to-profile">
          Perfil
        </Link>
      </S.LinksWrapper>
    );
  }
}

export default Links;
