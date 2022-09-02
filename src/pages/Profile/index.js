import React, { Component } from 'react';

import { Header, Loading, UserProfile } from '../../components';
import { getUser } from '../../services/userAPI';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {},
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
      this.setState({ loading: false, userData });
    });
  }

  render() {
    const { loading, userData } = this.state;
    const { name, email, image, description } = userData;
    return (
      <div data-testid="page-profile">
        <Header />
        {loading ? (
          <Loading />
        ) : (
          <UserProfile
            name={ name }
            email={ email }
            image={ image }
            description={ description }
          />
        )}
      </div>
    );
  }
}

export default Profile;
