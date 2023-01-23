import styled, { keyframes } from 'styled-components';

const colorAnime = keyframes`
  0%   {background: rgb(46, 46, 46);}
  25%  {background: rgb(41, 90, 131);}
  50%  {background: rgb(20, 100, 153);}
  75%  {background: rgb(62, 46, 100);}
  100% {background: rgb(46, 46, 46);}
`;

export const PageLayout = styled.div`
  background: #3b3b3b;
  align-items: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  -moz-font-feature-settings: 'liga' on;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all 500ms ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  animation: ${colorAnime} 30s;
  animation-iteration-count: infinite;
`;
