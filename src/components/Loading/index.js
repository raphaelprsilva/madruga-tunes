import React, { Component } from 'react';

import * as S from './styled';

class Loading extends Component {
  render() {
    return (
      <S.LoadingWrapper>
        <div>Carregando...</div>
        <S.Dots />
      </S.LoadingWrapper>
    );
  }
}

export default Loading;
