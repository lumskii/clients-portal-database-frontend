import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  width: ${({ isOpen }) => (isOpen ? 280 : 90)}px;
  height: 100vh;
  padding: 0 15px;
  background-color: #ff9900;
  transition: width 0.4s;
  overflow: hidden auto;
  z-index: 1;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: rgba(0, 0, 0, 0.15);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .title {
    position: relative;
    display: flex;
    align-items: center;
    height: 50px;

    a {
      position: absolute;
      left: 0;
      opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
      pointer-events: ${({ isOpen }) => (isOpen ? 'initial' : 'none')};
      transition: opacity 0.4s;
    }

    .toggle-icon {
      position: absolute;
      transition: right 0.4s;
      cursor: pointer;

      ${({ isOpen }) =>
        isOpen
          ? css`
              right: 0;
              color: #000;
              font-size: 35px;
            `
          : css`
              right: 18px;
              color: #fff;
              font-size: 30px;
              transform: rotate(180deg);
            `}
    }
  }

  ul {
    list-style: none;
    svg {
      margin: ${({ isOpen }) => (isOpen ? '0 10px' : '0 15px')};
    }
  }
`;

export const MenuLabel = styled.label`
  display: block;
  margin-top: 10px;
  padding: 10px 0;
  color: rgb(228, 228, 228);
  font-size: 0.75rem;
  text-transform: uppercase;
`;

export const MenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  margin: 5px;
  height: 50px;
  color: #fff;
  text-decoration: none;
  border-radius: 12px;
  white-space: nowrap;
  transition: background-color 150ms, color 150ms;

  &:hover {
    background-color: #fff;
    color: #ff9900;
  }
  &.active {
    background-color: #bcb9b9;
    color: #fff;
  }

  svg {
    min-width: 20px;
    height: 20px;
    line-height: 50px;
    text-align: center;
    transition: margin 0.4s;
  }
`;
