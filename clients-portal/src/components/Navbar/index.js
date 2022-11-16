import React, { useState } from "react";
import {
  NavLink,
  Bars,
  NavMenu,
  NavBtnLink,
  NavBtn,
  SideBar,
  MenuBar,
  ProfileArea,
  ArrowDown,
  LinkIcons,
  ListItems,
  LogoBrand,
  NavLinkLogo,
} from "./NavbarElements";
import { auth } from "../../firebase";
import {linksArray, secondaryLinksArray, thirdLinksArray} from "./NavbarData";
import Logo from "../../images/Logo.svg";

const Navbar = () => {
  const [showContents, setShowContents] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
    <SideBar isopen={sidebarOpen}>
      <>
        <Bars isopen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)} />
      </>
      
        <NavLinkLogo to="/" style={!sidebarOpen ? { width: `fit-content` } : {}}>
        {sidebarOpen && (
          <LogoBrand src={Logo} />
        )}
        </NavLinkLogo>

        <ListItems>
        <NavMenu>
           
          <MenuBar>Main Menu</MenuBar>
          {linksArray.map(({ label, icon, to, index }) => (
            <NavLink
              key={index}
              to={to}
              style={!sidebarOpen ? { width: `fit-content` } : {}}
            >
              <LinkIcons>{icon}</LinkIcons>
              {sidebarOpen && (
              <>
              {label}
              </>
              )}
            </NavLink>
          ))}
        </NavMenu>

        <NavMenu>
          <MenuBar>Edit</MenuBar>
          {secondaryLinksArray.map(({ label, icon, to, index }) => (
            <NavLink
              key={index}
              to={to}
              style={!sidebarOpen ? { width: `fit-content` } : {}}
            >
              <LinkIcons>{icon}</LinkIcons>
              {sidebarOpen && (
              <>
              {label}
              </>
              )}
            </NavLink>
          ))}
          </NavMenu>

        <NavMenu>
          <MenuBar>Help</MenuBar>
          {thirdLinksArray.map(({ label, icon, to, index }) => (
            <NavLink
              key={index}
              to={to}
              style={!sidebarOpen ? { width: `fit-content` } : {}}
            >
              <LinkIcons>{icon}</LinkIcons>
              {sidebarOpen && (
              <>
              {label}
              </>
              )}
            </NavLink>
          ))}
          </NavMenu>
          
          <NavMenu>
          <NavBtn style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <>
              <img className="avatarImg2" src='https://images.unsplash.com/profile-1518156163490-947fb5399aa6?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff' alt="" />
            </>
            
            <NavBtnLink to="/signin">
            {sidebarOpen && (
              <>
              Michael Smith
              </>
            )}
              <ArrowDown onClick={() => setShowContents(!showContents)}>
                {showContents === true ? "x" : "⏷"}
              </ArrowDown>
              {showContents && (
                <ProfileArea onClick={() => auth.signOut()}>Logout</ProfileArea>
              )}
            </NavBtnLink>
          </NavBtn>
          </NavMenu>
      </ListItems>
    </SideBar>
    
    {/* ...Header Starts Here... */}
    {/* <Head isopen={sidebarOpen}>

      <HeadLabel>
        <HeadInput type="text" placeholder='Search anything here...' />
        <Search />
      </HeadLabel>

      <HeadBtns>
          <HeadBtnLink>
          <Bell />
          <Badge>2</Badge>
          </HeadBtnLink>
          <HeadBtnLink>
          <Chat />
          <Badge>2</Badge>
          </HeadBtnLink>
      </HeadBtns>
    </Head> */}
  </>
  );
};

export default Navbar;
