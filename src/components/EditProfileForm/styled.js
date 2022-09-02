import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    padding: 0.5rem 0;
  }

  input {
    width: 350px;
    padding: 0.5rem 1rem;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    margin-bottom: 0.75rem;
    box-sizing: border-box;
    outline: none;
    transition: 0.3s;
    -webkit-transition: 0.3s;
  }

  input:focus {
    border: 1.3px solid #a3a0a0;
  }
`;

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    padding: 0.5rem 0;
  }

  textarea {
    width: 350px;
    height: 100px;
    padding: 0.5rem 1rem;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    margin-bottom: 0.75rem;
    box-sizing: border-box;
    outline: none;
    transition: 0.3s;
    -webkit-transition: 0.3s;
  }

  textarea:focus {
    border: 1.3px solid #a3a0a0;
  }

  textarea::-webkit-scrollbar {
    width: 0.5em;
  }

  textarea::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`;

export const ButtonWrapper = styled.button`
  width: 100px;
  background-color: #0af886;
  padding: 0.5rem 0;
  border-radius: 5px;
  color: #060606;
  border: none;
  transition: background-color 0.5s ease;

  :hover {
    background-color: #06c96c;
    cursor: pointer;
  }

  :disabled {
    color: #ffffff;
    background-color: #807c7a;
  }
`;
