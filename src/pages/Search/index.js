import React, { Component } from 'react';

import { Header, Loading, SearchForm } from '../../components';
import { getUser } from '../../services/userAPI';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';

const MIN_SEARCH_LENGTH = 2;

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      loadingAlbums: false,
      searchedFor: '',
      albums: [],
      user: {},
      inputSearch: '',
      searchButtonDisabled: true,
    };

    this.getArtistData = this.getArtistData.bind(this);
    this.getUserData = this.getUserData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getUserData();
  }

  handleChange(event) {
    const { target } = event;
    this.updateState(target.name, target.value);
  }

  async handleSubmit(event) {
    event.preventDefault();

    await this.getArtistData();
  }

  async getArtistData() {
    const { inputSearch } = this.state;
    this.setState({ loadingAlbums: true }, async () => {
      const response = await searchAlbumsAPI(inputSearch);

      this.setState({
        searchedFor: inputSearch,
        loadingAlbums: false,
        inputSearch: '',
        albums: response,
      });
    });
  }

  async getUserData() {
    const userData = await getUser();
    this.setState({
      user: userData,
      loading: false,
    });
  }

  updateState(name, value) {
    this.setState(
      {
        [name]: value,
      },
      () => this.validateField(value),
    );
  }

  validateField(value) {
    const isSearchFieldValid = value.length >= MIN_SEARCH_LENGTH;

    this.setState({
      searchButtonDisabled: !isSearchFieldValid,
    });
  }

  render() {
    const {
      loading,
      loadingAlbums,
      searchedFor,
      albums,
      user,
      inputSearch,
      searchButtonDisabled,
    } = this.state;

    return (
      <div data-testid="page-search">
        {
          loading ? <Loading /> : (
            <>
              <Header user={ user } loading={ loading } />
              <SearchForm
                loadingAlbums={ loadingAlbums }
                albums={ albums }
                searchedFor={ searchedFor }
                handleChange={ this.handleChange }
                handleSubmit={ this.handleSubmit }
                inputSearch={ inputSearch }
                searchButtonDisabled={ searchButtonDisabled }
              />
            </>
          )
        }
      </div>
    );
  }
}

export default Search;
