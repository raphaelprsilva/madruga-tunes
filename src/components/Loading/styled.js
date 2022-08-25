/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Dots = styled.div`
  width: 15px;
  margin-top: 15px;
  aspect-ratio: 1;
  border-radius: 50%;
  animation: d5 1s infinite linear alternate;

  @keyframes d5 {
    0%  {box-shadow: 20px 0 #0af886, -20px 0 #0002;background: #0af886 }
    33% {box-shadow: 20px 0 #0af886, -20px 0 #0002;background: #0002}
    66% {box-shadow: 20px 0 #0002,-20px 0 #0af886; background: #0002}
    100%{box-shadow: 20px 0 #0002,-20px 0 #0af886; background: #0af886 }
}
`;
