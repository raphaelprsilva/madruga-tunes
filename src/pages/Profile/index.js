import React, { Component } from 'react';

import { Header } from '../../components';
import { getUser } from '../../services/userAPI';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      user: {},
    };

    this.getUserData = this.getUserData.bind(this);
  }

  componentDidMount() {
    this.getUserData();
  }

  async getUserData() {
    const userData = await getUser();
    this.setState({
      user: userData,
      loading: false,
    });
  }

  render() {
    const { loading, user } = this.state;
    return (
      <div data-testid="page-profile">
        <Header user={ user } loading={ loading } />
      </div>
    );
  }
}

export default Profile;
