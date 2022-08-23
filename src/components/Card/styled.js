import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 290px;
  height: 320px;
  margin-top: 0.75rem;
  margin-bottom: 1.25rem;

  border: 1px solid transparent;
  border-radius: 5px;
  background: #fff;
  transition: all 0.2s ease;
  box-shadow: 0 5px 10px rgb(0 0 0 / 12%);

  :hover {
    box-shadow: 0 7.5px 12.5px rgb(0 0 0 / 20%);
  }

  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
    height: 200px;
    margin-bottom: 1rem;
  }
`;

export const AttributesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p:first-child {
    text-align: center;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p:last-child {
    font-size: 0.9rem;
    text-align: center;
    padding: 0 1rem;
    white-space: nowrap;
    width: 290px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
