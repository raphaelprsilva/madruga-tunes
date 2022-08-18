import React, { Component } from 'react';

import { Header, Loading } from '../../components';
import { getUser } from '../../services/userAPI';

class Favorites extends Component {
  mounted = false;

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      user: {},
    };
  }

  componentDidMount() {
    this.mounted = true;
    this.setState({ loading: true }, async () => {
      const user = await getUser();
      if (this.mounted) this.setState({ loading: false, user });
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { loading, user } = this.state;
    return (
      <div data-testid="page-favorites">
        {
          loading ? <Loading /> : <Header user={ user } />
        }
      </div>
    );
  }
}

export default Favorites;
