import styled from 'styled-components';
import { NavLink as Tacos } from 'react-router-dom';
import { FaSearch, FaRegBell } from 'react-icons/fa';
import { BsChatDots } from 'react-icons/bs';

export const Head = styled.nav`
  background: #fff;
  height: 50px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  top: 0;
`;

export const HeadLink = styled(Tacos)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  &.active {
    color: #000;
  }
`;

export const HeadLabel = styled.div`
  position: relative;
  display: flex;
  min-width: 100px;
  align-items: center;
  margin: 10px;
`;

export const Search = styled(FaSearch)`
  position: absolute;
  left: 15px;
  width: 20px;
  height: 20px;
`;

export const HeadInput = styled.input`
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  height: 30px;
  width: 100%;
  padding: 2px 23px 2px 45px;
  outline: 0;
  background-color: #f5f5f5;
  color: #000;
`;

export const HeadBtns = styled.div`
  position: relative;
  min-width: 150px;
  right: 0;
  align-items: center;
  top: 0px;
  margin: -3px 0;
`;

export const HeadBtnLink = styled.button`
  width: 40px;
  height: 40px;
  margin: 10px;
  cursor: pointer;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  background: #fff;
`;

export const Bell = styled(FaRegBell)`
  position: relative;
  width: 25px;
  height: 25px;
  top: 5px;
`;
export const Badge = styled.span`
  position: relative;
  width: 18px;
  height: 18px;
  font-size: 15px;
  top: -35px;
  right: -30px;
  background-color: red;
  color: #fff;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const Chat = styled(BsChatDots)`
  position: relative;
  width: 25px;
  height: 25px;
  top: 5px;
`;
