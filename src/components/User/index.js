import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HiUserCircle } from 'react-icons/hi';

import * as S from './styled';

class User extends Component {
  render() {
    const { user } = this.props;
    return (
      <S.UserWrapper>
        <HiUserCircle
          size={ 40 }
          style={ { color: '#0af886', marginLeft: '0.25rem', marginRight: '0.25rem' } }
        />
        <span data-testid="header-user-name">{ user.name }</span>
      </S.UserWrapper>
    );
  }
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default User;
