/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

class EditProfileForm extends Component {
  render() {
    const {
      handleChange,
      handleSubmit,
      userName,
      userEmail,
      userDescription,
      userProfileImageUrl,
      isDisabled,
    } = this.props;
    return (
      <S.FormWrapper onSubmit={ handleSubmit }>
        <S.InputWrapper>
          <label htmlFor="userProfileImageUrl">Imagem de Perfil</label>
          <input
            name="userProfileImageUrl"
            onChange={ handleChange }
            type="text"
            data-testid="edit-input-image"
            id="userProfileImageUrl"
            value={ userProfileImageUrl }
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <label htmlFor="userName">Name</label>
          <input
            name="userName"
            onChange={ handleChange }
            type="text"
            data-testid="edit-input-name"
            id="userName"
            value={ userName }
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <label htmlFor="userEmail">E-mail</label>
          <input
            name="userEmail"
            onChange={ handleChange }
            type="email"
            data-testid="edit-input-email"
            id="userEmail"
            value={ userEmail }
          />
        </S.InputWrapper>
        <S.TextAreaWrapper>
          <label htmlFor="userDescription">Descrição</label>
          <textarea
            name="userDescription"
            onChange={ handleChange }
            data-testid="edit-input-description"
            id="userDescription"
            value={ userDescription }
          />
        </S.TextAreaWrapper>
        <S.ButtonWrapper
          disabled={ isDisabled }
          type="submit"
          data-testid="edit-button-save"
        >
          Editar perfil
        </S.ButtonWrapper>
      </S.FormWrapper>
    );
  }
}

EditProfileForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  userDescription: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userProfileImageUrl: PropTypes.string.isRequired,
};

export default EditProfileForm;
