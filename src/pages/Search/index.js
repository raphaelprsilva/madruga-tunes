import React, { Component } from 'react';

import { Header, Loading, SearchForm } from '../../components';
import { getUser } from '../../services/userAPI';

const MIN_SEARCH_LENGTH = 2;

class Search extends Component {
  mounted = false;

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      user: {},
      inputSearch: '',
      searchButtonDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
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

  handleChange(event) {
    const { target } = event;
    this.updateState(target.name, target.value);
  }

  updateState(name, value) {
    this.setState({
      [name]: value,
    }, () => this.validateField(value));
  }

  validateField(value) {
    const isSearchFieldValid = value.length >= MIN_SEARCH_LENGTH;

    this.setState({
      searchButtonDisabled: !isSearchFieldValid,
    });
  }

  render() {
    const { loading, user, inputSearch, searchButtonDisabled } = this.state;

    return (
      <div data-testid="page-search">
        {loading ? (
          <Loading />
        ) : (
          <>
            <Header user={ user } />
            <SearchForm
              handleChange={ this.handleChange }
              inputSearch={ inputSearch }
              searchButtonDisabled={ searchButtonDisabled }
            />
          </>
        )}
      </div>
    );
  }
}

export default Search;
