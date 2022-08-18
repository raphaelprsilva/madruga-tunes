/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 198.7px;
  height: 41.65px;

  margin-right: 2rem;

  background-color: #ffffff;
  color: #29313d;
  border-radius: 50px;

  @media (max-width: 800px) {
      width: 46.7px;
    }

    @media (max-width: 467px) {
      width: 46.7px;
    }

  span {
    text-align: center;
    padding-right: 2rem;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    white-space: nowrap;
    text-overflow: ellipsis;
    inline-size: 155px;
    overflow: hidden;

    @media (max-width: 800px) {
      display: none;
    }

    @media (max-width: 467px) {
      display: none;
    }
  }
`;
