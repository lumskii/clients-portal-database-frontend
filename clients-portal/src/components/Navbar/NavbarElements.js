import styled, { css } from 'styled-components';
import { NavLink as Tacos } from 'react-router-dom';
import { MdOutlineDashboard, MdOutlinePointOfSale } from 'react-icons/md';
import {
  FaUserPlus,
  FaUserEdit,
  FaUsersCog,
  FaHandsHelping,
  FaSearch,
  FaRegBell,
} from 'react-icons/fa';
import { GiPayMoney } from 'react-icons/gi';
import {
  BsDistributeHorizontal,
  BsChatDots,
  BsBoxArrowInLeft,
  BsFileSpreadsheet,
} from 'react-icons/bs';
import { VscGear } from 'react-icons/vsc';

export const SideBar = styled.nav`
  width: ${({ isopen }) => (!isopen ? `80px` : `280px`)};
  background: #ff9900;
  padding: 6px 14px;
  transition: all 0.5s ease;
  height: 100vh;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const Bars = styled(BsBoxArrowInLeft)`
  color: ${({ isopen }) => (isopen ? `#000` : `#fff`)};
  position: absolute;
  right: ${({ isopen }) => (isopen ? `20px` : `60px`)};
  top: ${({ isopen }) => (isopen ? `2px` : `15px`)};
  font-size: 20px;
  height: ${({ isopen }) => (isopen ? `35px` : `20px`)};
  width: ${({ isopen }) => (isopen ? `35px` : `20px`)};
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  transition: 350ms;
  z-index: 100;
  transform: ${({ isopen }) => (!isopen ? `rotate(180deg)` : `initial`)};

  // @media screen and (max-height: 768px) {
  //   top: 0px;
  //   right: ${({ isopen }) => (isopen ? `-40px` : `-40px`)};
  //   background: #ff9900;
  //   padding: 3px;
  // }
`;

export const LogoBrand = styled.img`
  width: 160px;
`;

export const LogoBrandTwo = styled.img`
  width: 300px;
`;

export const NavLinkLogo = styled(Tacos)`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 5px;
  text-decoration: none;
  top: 5px;
  position: absolute;
`;

export const MenuBar = styled.div`
  font-size: 0.75rem;
  text-transform: uppercase;
  color: rgb(228, 228, 228);
  left: ${({ isopen }) => (isopen ? `20px` : `0px`)};
  position: relative;
  top: -5px;

  &:before {
    content: ' ';
    width: 100%;
    position: absolute;
    left: ${({ isopen }) => (isopen ? `-20px` : `0px`)};
    top: -5px;

    @media screen and (max-height: 768px) {
      top: 0px;
    }
  }
`;

export const NavLink = styled(Tacos)`
  position: relative;
  height: 50px;
  width: 100%;
  margin: 5px 5px;
  list-style: none;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  line-height: 10px;
  text-decoration: none;
  transform: all 0.4s ease;
  border-radius: 12px;
  &:hover {
    background: #fff;
    color: #ff9900;
  }
  &.active {
    color: #fff;
    background: #bcb9b9;
  }
  @media screen and (max-height: 768px) {
    margin: 0px;
    height: 40px;
  }

  ${({ showOnFocus }) =>
    !showOnFocus &&
    css`
      outline: none;
    `}
`;
export const LinkIcons = styled.div`
  display: block;
`;

export const DashBoard = styled(MdOutlineDashboard)`
  height: 20px;
  min-width: 20px;
  margin: auto 10px;
  line-height: 50px;
  text-align: center;
`;
export const UserPlus = styled(FaUserPlus)`
  height: 20px;
  min-width: 20px;
  margin: auto 10px;
  line-height: 50px;
  text-align: center;
`;
export const UserEdit = styled(FaUserEdit)`
  height: 20px;
  min-width: 20px;
  margin: auto 10px;
  line-height: 50px;
  text-align: center;
`;
export const UsersCog = styled(FaUsersCog)`
  height: 20px;
  min-width: 20px;
  margin: auto 10px;
  line-height: 50px;
  text-align: center;
`;
export const PayMoney = styled(GiPayMoney)`
  height: 20px;
  min-width: 20px;
  margin: auto 10px;
  line-height: 50px;
  text-align: center;
`;
export const PointOfSale = styled(MdOutlinePointOfSale)`
  height: 20px;
  min-width: 20px;
  margin: auto 10px;
  line-height: 50px;
  text-align: center;
`;
export const DistributeHori = styled(BsDistributeHorizontal)`
  height: 20px;
  min-width: 20px;
  margin: auto 10px;
  line-height: 50px;
  text-align: center;
`;
export const HandsHelp = styled(FaHandsHelping)`
  height: 20px;
  min-width: 20px;
  margin: auto 10px;
  line-height: 50px;
  text-align: center;
`;
export const Gear = styled(VscGear)`
  height: 20px;
  min-width: 20px;
  margin: auto 10px;
  line-height: 50px;
  text-align: center;
`;

export const Report = styled(BsFileSpreadsheet)`
  height: 20px;
  min-width: 20px;
  margin: auto 10px;
  line-height: 50px;
  text-align: center;
`;

export const ListItems = styled.div`
  display: grid;

  @media screen and (max-height: 960px) {
    margin: 0px;
  }
`;

export const NavMenu = styled.div`
  margin-top: 55px;

  @media screen and (max-height: 768px) {
    margin-top: 37px;
  }
`;

export const NavBtn = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  color: #fff;
  left: 10;
  margin: -40px auto;
  text-align: center;
  font-size: 1.1rem;
  font-weight: bold;
  align-item: center;

  @media screen and (max-height: 768px) {
    margin: -20px auto;
  }
`;

export const NavBtnLink = styled.div`
  position: relative;
  padding: 10px 6px;
  align-items: center;
  line-height: 35px;
`;
export const ArrowDown = styled.span`
  margin-left: ${({ isopen }) => (isopen ? `10px` : `5px`)};
  cursor: pointer;
  font-size: 1.5rem;
  position: relative;
  z-index: 99;
`;

export const ProfileArea = styled.div`
  position: absolute;
  width: 100px;
  height: 50px;
  font-size: 1.2rem;
  background: #000;
  color: #fff;
  top: 50px;
  right: ${({ isopen }) => (isopen ? `25px` : `10px`)};
  cursor: pointer;
`;
export const NavLinkTooltip = styled.span`
  height: 35px;
  width: 200px;
  padding: 0 3px;
  display: flex;
  border-radius: 6px;
  line-height: 35px;
  text-align: center;
  background: #000;
  color: #ff9900;
  left: 100%;
  position: absolute;
  align-items: right;
  pointer-events: none;
`;

export const TooltipBox = styled.span`
  position: relative;
  background-color: #${(props) => props.background};
  color: #ff9900;
  text-align: center;
  border-radius: 5px;
  padding: 0 5px;
  font-size: 0.8rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.2);
`;

//..............Header Styling Starts Here.............//

export const Head = styled.nav`
  background: #fff;
  height: 60px;
  display: flex;
  justify-content: space-between;
  width: ${({ isopen }) =>
    !isopen ? `calc(90vw - 100px)` : `calc(100% - 280px)`};
  margin: 0 ${({ isopen }) => (!isopen ? `100px` : `240px`)};
  position: absolute;
  top: 0;
  padding: 0 40px;
  z-index: 120;
`;

export const HeadLink = styled(Tacos)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
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
  margin-top: 10px;
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

export const Chat = styled(BsChatDots)`
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
