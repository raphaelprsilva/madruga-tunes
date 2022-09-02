import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { EditProfileForm, Header, Loading } from '../../components';
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
          <EditProfileForm
            handleChange={ this.handleChange }
            handleSubmit={ this.handleSubmit }
            isDisabled={ isDisabled }
            userDescription={ userDescription }
            userEmail={ userEmail }
            userName={ userName }
            userProfileImageUrl={ userProfileImageUrl }
          />
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
