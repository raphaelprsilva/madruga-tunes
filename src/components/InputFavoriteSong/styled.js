import styled from 'styled-components';

export const FavoriteWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
`;

export const Label = styled.label`
  padding-right: 0.25rem;
`;

export const Input = styled.input`
  transform: scale(1.5);
  :checked {
    accent-color: #0af886;
  }
`;
