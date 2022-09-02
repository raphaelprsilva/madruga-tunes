import styled from 'styled-components';

export const UserProfileWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: 3rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 0.5rem;
  }

  a {
    border: 1px solid #06c96c;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 32px;
    gap: 10px;

    width: 200px;
    height: 40px;
    left: 454px;
    top: 601px;

    border-radius: 5px;
    font-weight: bolder;
    color: #06c96c;
    transition: background-color 0.5s ease;
  }

  a:visited {
    text-decoration: none;
  }

  a:link {
    text-decoration: none;
  }
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.5rem;
  width: 290px;
  padding-left: 0.5rem;
`;

export const ItemWrapper = styled.div`
  margin-bottom: 0.75rem;

  p:first-child {
    font-weight: bold;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
  }
`;
