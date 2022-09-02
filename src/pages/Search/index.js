import React, { Component } from 'react';

import { Header, Loading, SearchForm } from '../../components';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';

const MIN_SEARCH_LENGTH = 2;

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      searchedFor: '',
      albums: [],
      inputSearch: '',
      searchButtonDisabled: true,
    };

    this.getArtistData = this.getArtistData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.setState({ loading: true }, async () => {
      const response = await searchAlbumsAPI(inputSearch);

      this.setState({
        searchedFor: inputSearch,
        loading: false,
        inputSearch: '',
        albums: response,
      });
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
      searchedFor,
      albums,
      inputSearch,
      searchButtonDisabled,
    } = this.state;

    return (
      <div data-testid="page-search">
        <Header />
        {
          loading ? <Loading /> : (
            <SearchForm
              loadingAlbums={ loading }
              albums={ albums }
              searchedFor={ searchedFor }
              handleChange={ this.handleChange }
              handleSubmit={ this.handleSubmit }
              inputSearch={ inputSearch }
              searchButtonDisabled={ searchButtonDisabled }
            />
          )
        }
      </div>
    );
  }
}

export default Search;
