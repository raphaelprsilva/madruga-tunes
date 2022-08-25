/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const MusicsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 625px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  border-bottom: 1px solid #d3d3d3;

  :first-child {
    border-top: 1px solid #d3d3d3;
  }

  :last-child {
    border-bottom: 1px solid #d3d3d3;
  }

  @media (max-width: 808px) {
    width: 400px;
    text-align: center;
  }

  p {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  audio {
    padding-bottom: 0.5rem;
  }
`;
