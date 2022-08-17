import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { LoginForm, Image } from '../../components';
import * as S from './styled';

import madrugaTunesLogo from '../../images/madruga_tunes_logo_black.svg';

import { createUser } from '../../services/userAPI';
import Loading from '../../components/Loading';

const MIN_USERNAME_LENGTH = 3;

class Login extends Component {
  mounted = false;

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      isLoginButtonDisabled: true,
      username: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateField = this.validateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleChange(event) {
    const { target } = event;
    this.updateState(target.name, target.value);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { username } = this.state;
    const { history } = this.props;

    this.setState({ loading: true }, async () => {
      await createUser({ name: username });
      if (this.mounted) this.setState({ loading: false });
      history.push('/search');
    });
  }

  updateState(name, value) {
    this.setState({
      [name]: value,
    }, () => this.validateField(value));
  }

  validateField(value) {
    const isUsernameLengthValid = value.length >= MIN_USERNAME_LENGTH;

    this.setState({
      isLoginButtonDisabled: !isUsernameLengthValid,
    });
  }

  render() {
    const { loading, isLoginButtonDisabled, username } = this.state;
    return (
      <div>
        {loading ? (
          <S.FormPageWrapper>
            <Loading />
          </S.FormPageWrapper>
        ) : (
          <S.FormPageWrapper data-testid="page-login">
            <Image
              imageSrc={ madrugaTunesLogo }
              imageAlt="Logo da Madruga Tunes"
            />
            <LoginForm
              { ...this.props }
              handleChange={ this.handleChange }
              username={ username }
              loginButtonStatus={ isLoginButtonDisabled }
              handleSubmit={ this.handleSubmit }
            />
          </S.FormPageWrapper>
        )}
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
