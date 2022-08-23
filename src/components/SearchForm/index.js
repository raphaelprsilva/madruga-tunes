import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { HiSearch } from 'react-icons/hi';

import Loading from '../Loading';

import * as S from './styled';
import Albums from '../Albums';

class SearchForm extends Component {
  render() {
    const {
      handleChange,
      searchedFor,
      loadingAlbums,
      albums,
      inputSearch,
      searchButtonDisabled,
      handleSubmit,
    } = this.props;
    return (
      <div>
        {loadingAlbums ? (
          <S.FormWrapper>
            <Loading />
          </S.FormWrapper>
        ) : (
          <>
            <S.FormWrapper onSubmit={ handleSubmit }>
              <S.InputWrapper>
                <input
                  onChange={ handleChange }
                  name="inputSearch"
                  value={ inputSearch }
                  type="text"
                  data-testid="search-artist-input"
                  placeholder="Nome do artista"
                />
                <span>
                  <HiSearch />
                </span>
              </S.InputWrapper>
              <button
                type="submit"
                disabled={ searchButtonDisabled }
                data-testid="search-artist-button"
              >
                Pesquisar
              </button>
            </S.FormWrapper>
            <Albums albums={ albums } searchedFor={ searchedFor } />
          </>
        )}
      </div>
    );
  }
}

SearchForm.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.shape({
    artistId: PropTypes.number,
    artistName: PropTypes.string,
    artworkUrl100: PropTypes.string,
    collectionId: PropTypes.number,
    collectionName: PropTypes.string,
    collectionPrice: PropTypes.number,
    releaseDate: PropTypes.string,
    trackCount: PropTypes.number,
  })).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  inputSearch: PropTypes.string.isRequired,
  loadingAlbums: PropTypes.bool.isRequired,
  searchButtonDisabled: PropTypes.bool.isRequired,
  searchedFor: PropTypes.string.isRequired,
};

export default SearchForm;
