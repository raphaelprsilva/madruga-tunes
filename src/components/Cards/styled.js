/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const CardsWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  a {
    color: #060606;

    :link {
      text-decoration: none;
    }

    :visited {
      text-decoration: none;
    }
  }
`;
