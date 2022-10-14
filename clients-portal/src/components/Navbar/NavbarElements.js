import styled, {css} from 'styled-components';
import {NavLink as Tacos} from 'react-router-dom';
import {MdOutlineDashboard, MdOutlinePointOfSale} from 'react-icons/md';
import {
  FaUserPlus,
  FaUserEdit,
  FaUsersCog,
  FaHandsHelping,
  FaSearch,
  FaRegBell,
} from "react-icons/fa";
import {GiPayMoney} from 'react-icons/gi';
import {BsDistributeHorizontal, BsChatDots, BsBoxArrowInLeft} from 'react-icons/bs';
import {VscGear} from 'react-icons/vsc';

export const SideBar = styled.nav`
    width: ${({ isOpen }) => (!isOpen ? `80px` : `280px`)};
    background: #ff9900;
    padding: 6px 14px;
    transition: all 0.5s ease;
    z-index: 100;
    height: calc(100vh - 50px);
    position: sticky;
    top: 50px;
`

export const Bars = styled(BsBoxArrowInLeft)`
  color: ${({ isOpen }) => (isOpen ? `#000` : `#fff`)};
  position: absolute;
  right: ${({ isOpen }) => (isOpen ? `20px` : `50px`)};
  top: 2px;
  font-size: 20px;
  height: 35px;
  width: 35px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  transition: 350ms;
  z-index: 100;
  transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};

  // @media screen and (max-height: 768px) {
  //   top: 0px;
  //   right: ${({ isOpen }) => (isOpen ? `-40px` : `-40px`)};
  //   background: #ff9900;
  //   padding: 3px;
  // }
`

export const LogoBrand = styled.img`
    width: 160px;
`

export const LogoBrandTwo = styled.img`
    width: 300px;
`

export const NavLinkLogo = styled(Tacos)`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 5px;
  text-decoration: none;
  top: 20px;
  position: absolute;
`

export const MenuBar = styled.div`
  font-size: .75rem;
  text-transform: uppercase;
  color: rgb(228, 228, 228);
  left: ${({ isOpen }) => (isOpen ? `20px` : `0px`)};
  position: relative;
  top: -8px;

  &:before {
    content: " ";
    width: 100%;
    height: 1px;
    background: #BCB9B9;
    position: absolute;
    left: ${({ isOpen }) => (isOpen ? `-20px` : `0px`)};
    top: -8px;

    @media screen and (max-height: 768px) {
      top: 0px;
    }
  }
`

export const NavLink = styled(Tacos)`
  position: relative;
  height: 50px;
  width: 100%;
  margin: 5px 5px;
  list-style: none;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: .9rem;
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
    background: #BCB9B9;
  }
  @media screen and (max-height: 768px) {
    margin: 0px;
    height: 40px;
  }

  ${({showOnFocus}) =>
    
    !showOnFocus &&
    css`outline: none;`
  }
` 
export const LinkIcons = styled.div`
  display: block;

`

export const DashBoard = styled(MdOutlineDashboard)`
  height: 30px;
  min-width: 30px;
  margin: auto 10px;
  line-height: 50px;
  text-align: center;
`
export const UserPlus = styled(FaUserPlus)`
  height: 30px;
  min-width: 30px;
  margin: auto 10px;
  line-height: 50px;
  text-align: center;
`
export const UserEdit = styled(FaUserEdit)`
  height: 30px;
  min-width: 30px;
  margin: auto 10px;
  line-height: 50px;
  text-align: center;
`
export const UsersCog = styled(FaUsersCog)`
  height: 30px;
  min-width: 30px;
  margin: auto 10px;
  line-height: 50px;
  text-align: center;
`
export const PayMoney = styled(GiPayMoney)`
  height: 30px;
  min-width: 30px;
  margin: auto 10px;
  line-height: 50px;
  text-align: center;
`
export const PointOfSale = styled(MdOutlinePointOfSale)`
  height: 30px;
  min-width: 30px;
  margin: auto 10px;
  line-height: 50px;
  text-align: center;
`
export const DistributeHori = styled(BsDistributeHorizontal)`
  height: 30px;
  min-width: 30px;
  margin: auto 10px;
  line-height: 50px;
  text-align: center;
`
export const HandsHelp = styled(FaHandsHelping)`
  height: 30px;
  min-width: 30px;
  margin: auto 10px;
  line-height: 50px;
  text-align: center;
`
export const Gear = styled(VscGear)`
  height: 30px;
  min-width: 30px;
  margin: auto 10px;
  line-height: 50px;
  text-align: center;
`

export const ListItems = styled.div`
  display: grid;

  @media screen and (max-height: 960px) {
    margin: 0px;
  }
`

export const NavMenu = styled.div`
  margin-top: 55px;

  @media screen and (max-height: 768px) {
    margin-top: 37px;
  }
`

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
`

export const NavBtnLink = styled.div`
  position: relative;
  padding: 10px 6px;
  align-items: center;
  line-height: 35px;
`
export const ArrowDown = styled.span`
  margin-left: ${({ isOpen }) => (isOpen ? `10px` : `5px`)};
  cursor: pointer;
  font-size: 1.5rem;
  position: relative;
  z-index: 99;
`

export const ProfileArea = styled.div`
  position: absolute;
  width: 100px;
  height: 50px;
  font-size: 1.2rem;
  background: #000;
  color: #fff;
  top: 50px;
  right: ${({ isOpen }) => (isOpen ? `25px` : `10px`)};
  cursor: pointer;
`
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
  font-size: .8rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.2);
`;

//..............Header Styling Starts Here.............//

export const Head = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  width: ${({ isOpen }) => (!isOpen ? `calc(100vw - 100px)` : `calc(100vw - 280px)`)};
  margin: 0 ${({ isOpen }) => (!isOpen ? `100px` : `300px`)};
  top: 0;
`

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
` 

export const HeadLabel = styled.div`
    position: relative;
    display: flex;
    min-width: 100px;
    align-items: center;
`

export const Search = styled(FaSearch)`
    position: absolute;
    left: 15px;
    width: 20px;
    height: 20px;
  
`

export const HeadInput = styled.input`
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    height: 30px;
    width: 100%;
    padding: 2px 23px 2px 45px;
    outline: 0;
    background-color: #f5f5f5;
    color: #000;
`

export const HeadBtns = styled.div`
    position: relative;
    min-width: 150px;
    right: 0;
    align-items: center;
    top: 10px;
`

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
`

export const Chat = styled(BsChatDots)`
    position: relative;
    width: 25px;
    height: 25px;
`