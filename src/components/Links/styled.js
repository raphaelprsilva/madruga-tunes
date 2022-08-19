/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const LinksWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f0f2f5;

  -webkit-box-shadow: 0 4px 6px -6px #222;
  -moz-box-shadow: 0 4px 6px -6px #222;
  box-shadow: 0 4px 6px -6px #222;

  width: 100%;
  height: 40px;

  a {
    color: #060606;
    padding: 0.73rem;
    text-align: center;
    width: 33.33%;
    transition: 0.3s;

    :link {
      text-decoration: none;
    }

    :visited {
      text-decoration: none;
    }

    :hover {
      background-color: #06c96c;
      color: #e6e6e6;
    }
  }
`;
