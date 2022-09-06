import React from 'react';
import {MdOutlineDashboard, MdOutlinePointOfSale} from 'react-icons/md';
import {FaUserPlus, FaUserEdit, FaUsersCog, FaHandsHelping} from 'react-icons/fa';
import {GiPayMoney} from 'react-icons/gi';
import {BsDistributeHorizontal} from 'react-icons/bs';
import {VscGear} from 'react-icons/vsc';
import Logo from '../../images/Logo.png';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcons,
  NavMenu,
  NavItem,
  NavLinks,
  SlotOne,
  MainMenu,
  Help,
  LogoBrand
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <LogoBrand src={Logo} />
                </NavLogo>
                <MobileIcons>
                    <SlotOne>
                    <MainMenu>Main Menu</MainMenu>
                    <MdOutlineDashboard />
                    <FaUserPlus />
                    <FaUserEdit />
                    <FaUsersCog />
                    <GiPayMoney />
                    <MdOutlinePointOfSale />
                    <BsDistributeHorizontal />
                    <Help>Help & Support</Help>
                    <FaHandsHelping />
                    <VscGear />
                    </SlotOne>
                </MobileIcons>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='/'><FaUserPlus /> Set Up New Client</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar