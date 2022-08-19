import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 200px;

  padding-top: 3rem;
  padding-bottom: 1.5rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  @media (max-width: 467px) {
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 32px;
    gap: 10px;

    width: 190px;
    height: 45px;
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
      width: 300px;
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

export const InputWrapper = styled.div`
  position: relative;

  input {
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    box-sizing: border-box;
    outline: none;
    transition: 0.3s;
    -webkit-transition: 0.3s;

    width: 519px;
    height: 45px;
    left: 454px;
    top: 525px;

    @media (max-width: 800px) {
      width: 446px;
      margin-bottom: 1rem;
      margin-right: 0;
    }

    @media (max-width: 467px) {
      width: 300px;
    }
  }

  input:focus {
    border: 1.3px solid #a3a0a0;
  }

  span {
    height: 1.5rem;
    width: 2rem;
    padding: 4px;
    position: absolute;
    box-sizing: border-box;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);

    @media (max-width: 800px) {
      height: 2.5rem;
      right: 4px;
    }
  }
`;
