import PropTypes from 'prop-types';
import React, { Component } from 'react';

import * as S from './styled';

class LoginForm extends Component {
  render() {
    const { handleSubmit, username, loginButtonStatus, handleChange } = this.props;
    return (
      <S.FormWrapper onSubmit={ handleSubmit }>
        <input
          type="text"
          name="username"
          value={ username }
          data-testid="login-name-input"
          placeholder="Insira seu nome"
          onChange={ handleChange }
        />
        <button
          disabled={ loginButtonStatus }
          data-testid="login-submit-button"
          type="submit"
        >
          Entrar
        </button>
      </S.FormWrapper>
    );
  }
}

LoginForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  loginButtonStatus: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
};

export default LoginForm;
