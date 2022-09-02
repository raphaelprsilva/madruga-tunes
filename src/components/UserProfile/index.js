import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { HiUserCircle } from 'react-icons/hi';

import * as S from './styled';

class UserProfile extends Component {
  render() {
    const { image, name, email, description } = this.props;
    const userImage = (
      <img data-testid="profile-image" src={ image } alt={ `${name}` } />
    );
    const defaultAvatar = (
      <HiUserCircle
        size={ 70 }
        style={ {
          color: '#0af886',
          marginLeft: '0.25rem',
          marginRight: '1rem',
        } }
      />
    );

    return (
      <S.UserProfileWrapper>
        <S.ImageWrapper>
          {image ? userImage : defaultAvatar}
          <Link to="/profile/edit">Editar perfil</Link>
        </S.ImageWrapper>
        <S.ItemsWrapper>
          <S.ItemWrapper>
            <p>Nome</p>
            <p>{name}</p>
          </S.ItemWrapper>
          <S.ItemWrapper>
            <p>E-mail</p>
            <p>{email}</p>
          </S.ItemWrapper>
          <S.ItemWrapper>
            <p>Descrição</p>
            <p>{description}</p>
          </S.ItemWrapper>
        </S.ItemsWrapper>
      </S.UserProfileWrapper>
    );
  }
}

UserProfile.propTypes = {
  description: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default UserProfile;
