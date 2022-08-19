import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { HiSearch } from 'react-icons/hi';

import * as S from './styled';

class SearchForm extends Component {
  render() {
    const { handleChange, inputSearch, searchButtonDisabled } = this.props;
    return (
      <S.FormWrapper>
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
    );
  }
}

SearchForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  inputSearch: PropTypes.string.isRequired,
  searchButtonDisabled: PropTypes.bool.isRequired,
};

export default SearchForm;
