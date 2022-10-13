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
  ListItems
} from "./NavbarElements";
import { auth } from "../../firebase";
import {linksArray, secondaryLinksArray, thirdLinksArray} from "./NavbarData";
// import { IconContext } from "react-icons/lib";

const Navbar = () => {

  const [showContents, setShowContents] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
    <SideBar isOpen={sidebarOpen}>
      <>
        <Bars isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)} />
      </>
      
        {/* <NavLinkLogo to="/" style={!sidebarOpen ? { width: `fit-content` } : {}}>
        {sidebarOpen && (
          <LogoBrand src={Logo} />
        )}
        </NavLinkLogo> */}

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
    {/* <Head isOpen={sidebarOpen}>
      <HeadLink to="/">
        <h1>Dashboard</h1>
      </HeadLink>

      <HeadLabel>
        <HeadInput type="text" placeholder='Search anything here...' />
        <Search />
      </HeadLabel>

        <HeadBtns>
            <HeadBtnLink>
            <Bell />
            </HeadBtnLink>
            <HeadBtnLink>
            <Chat />
            </HeadBtnLink>
        </HeadBtns>
    </Head> */}
  </>
  );
};

export default Navbar;
