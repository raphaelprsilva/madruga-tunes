import styled from 'styled-components';

export const MusicListWrapper = styled.section`
  padding-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SongsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 625px;

  margin-top: 0.75rem;
  padding-left: 4rem;

  @media (max-width: 800px) {
    margin-top: 1.5rem;
    padding-left: 0;
    width: 400px;
  }
`;
