/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 697px;
  height: 314px;

  padding: 1.5rem 1rem;
  margin: 1.5rem;
  border: 1px solid transparent;
  border-radius: 5px;
  background: #fff;
  transition: all 0.2s ease;
  box-shadow: 0 5px 10px rgb(0 0 0 / 12%);

  :hover {
    box-shadow: 0 7.5px 12.5px rgb(0 0 0 / 20%);
  }

  @media (max-width: 800px) {
    width: 453px;
    height: 314px;
  }

  @media (max-width: 467px) {
    width: 295px;
    height: 314px;
  }

  input {
    padding: 0.5rem 1rem;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    margin-bottom: 0.75rem;
    box-sizing: border-box;
    outline: none;
    transition: 0.3s;
    -webkit-transition: 0.3s;

    width: 519px;
    height: 45px;
    left: 454px;
    top: 525px;

    @media (max-width: 800px) {
      width: 350px;
      height: 45px;
    }

    @media (max-width: 467px) {
      width: 251px;
      height: 45px;
    }
  }

  input:focus {
    border: 1.3px solid #a3a0a0;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 32px;
    gap: 10px;

    width: 519px;
    height: 40px;
    left: 454px;
    top: 601px;

    background-color: #0af886;
    border-radius: 5px;
    font-weight: bolder;
    color: #ffffff;
    border: none;
    transition: background-color 0.5s ease;

    @media (max-width: 800px) {
      width: 350px;
      height: 45px;
    }

    @media (max-width: 467px) {
      width: 251px;
      height: 45px;
    }

    :hover {
      background-color: #06c96c;
      cursor: pointer;
    }

    :disabled {
      background-color: #807c7a;
    }
  }
`;
