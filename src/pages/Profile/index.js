import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Header, Loading } from '../../components';
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
        {
          loading ? <Loading /> : (
            <section>
              <img data-testid="profile-image" src={ image } alt={ `${name}` } />
              <Link to="/profile/edit">Editar perfil</Link>
              <div>
                <p>Nome</p>
                <p>{name}</p>
              </div>
              <div>
                <p>E-mail</p>
                <p>{email}</p>
              </div>
              <div>
                <p>Descrição</p>
                <p>{description}</p>
              </div>
            </section>
          )
        }
      </div>
    );
  }
}

export default Profile;
