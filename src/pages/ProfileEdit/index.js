import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Header, Loading } from '../../components';
import { getUser, updateUser } from '../../services/userAPI';

class ProfileEdit extends Component {
  mounted = false;

  constructor(props) {
    super(props);

    this.state = {
      isDisabled: true,
      loading: false,
      userName: '',
      userEmail: '',
      userDescription: '',
      userProfileImageUrl: '',
    };

    this.getUserData = this.getUserData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateState = this.updateState.bind(this);
    this.validateFormFields = this.validateFormFields.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
    this.getUserData();
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
    const { history } = this.props;

    const { userName, userEmail, userDescription, userProfileImageUrl } = this.state;
    const userData = {
      name: userName,
      email: userEmail,
      description: userDescription,
      image: userProfileImageUrl,
    };
    this.setState({ loading: true }, async () => {
      await updateUser(userData);
      if (this.mounted) this.setState({ loading: false });
      history.push('/profile');
    });
  }

  async getUserData() {
    const userData = await getUser();
    this.setState({
      userName: userData.name,
      userEmail: userData.email,
      userDescription: userData.description,
      userProfileImageUrl: userData.image,
      loading: false,
    });
  }

  updateState(name, value) {
    this.setState(
      {
        [name]: value,
      },
      () => this.validateFormFields(),
    );
  }

  validateFormFields() {
    const { userName, userDescription, userEmail, userProfileImageUrl } = this.state;
    const formFieldsArr = [
      userName,
      userEmail,
      userDescription,
      userProfileImageUrl,
    ];
    const areValidFields = formFieldsArr.every(
      (field) => field.trim().length > 0,
    );
    if (areValidFields) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  render() {
    const {
      loading,
      isDisabled,
      userName,
      userEmail,
      userDescription,
      userProfileImageUrl,
    } = this.state;

    return (
      <div data-testid="page-profile-edit">
        <Header />
        {loading ? (
          <Loading />
        ) : (
          <form onSubmit={ this.handleSubmit }>
            <label htmlFor="userName">
              Name
              <input
                name="userName"
                onChange={ this.handleChange }
                type="text"
                data-testid="edit-input-name"
                id="userName"
                value={ userName }
              />
            </label>
            <label htmlFor="userEmail">
              E-mail
              <input
                name="userEmail"
                onChange={ this.handleChange }
                type="email"
                data-testid="edit-input-email"
                id="userEmail"
                value={ userEmail }
              />
            </label>
            <label htmlFor="userDescription">
              Descrição
              <textarea
                name="userDescription"
                onChange={ this.handleChange }
                data-testid="edit-input-description"
                id="userDescription"
                value={ userDescription }
              />
            </label>
            <label htmlFor="userProfileImageUrl">
              Imagem de Perfil
              <input
                name="userProfileImageUrl"
                onChange={ this.handleChange }
                type="text"
                data-testid="edit-input-image"
                id="userProfileImageUrl"
                value={ userProfileImageUrl }
              />
            </label>
            <button
              disabled={ isDisabled }
              type="submit"
              data-testid="edit-button-save"
            >
              Editar perfil
            </button>
          </form>
        )}
      </div>
    );
  }
}

ProfileEdit.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default ProfileEdit;
