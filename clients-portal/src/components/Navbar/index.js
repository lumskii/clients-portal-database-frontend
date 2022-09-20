import React, { useState, useRef } from "react";
import {
  NavLink,
  Bars,
  NavMenu,
  NavBtnLink,
  NavBtn,
  SideBar,
  LogoBrand,
  ProfilePic,
  NavLinkLogo,
  MenuBar,
  ProfileArea,
  ArrowDown,
  NavLinkTooltip,
  TooltipBox,
  LinkIcons,
  Head,
  HeadLink,
  HeadLabel,
  HeadBtnLink,
  HeadInput,
  Search,
  Bell,
  HeadBtns,
  Chat,
  LayOut,
  ListItems
} from "./NavbarElements";
import Logo from "../../images/Logo.svg";
import { auth } from "../../firebase";
import {linksArray, secondaryLinksArray} from "./NavbarData";
// import { IconContext } from "react-icons/lib";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const targetRef = useRef(null);
  const showTooltip = isHovered || isFocused;
  const showTooltipSecondary = isHovered || isFocused;

  const handleClick = (e) => {
    e.preventDefault();
    if (targetRef.current) {
      targetRef.current.blur();
    }
  };

  const [showContents, setShowContents] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
    <LayOut>
    <SideBar isOpen={sidebarOpen}>
      <>
        <Bars isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)} />
      </>
      
        <NavLinkLogo to="/" style={!sidebarOpen ? { width: `fit-content` } : {}}>
        {sidebarOpen && (
          <LogoBrand src={Logo} />
        )}
        </NavLinkLogo>

        <ListItems>
        <NavMenu>
          <MenuBar>Main Menu</MenuBar>
          {linksArray.map(({ label, icon, to, notification }) => (
            <NavLink
              to={to}
              activeStyle
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onClick={handleClick}
              ref={targetRef}
              showOnFocus={isFocused}
              style={!sidebarOpen ? { width: `fit-content` } : {}}
            >
              <LinkIcons>{icon}</LinkIcons>
              {sidebarOpen && (
              <>
              {label}
              {/* hide or show notifications on hover */}
              {showTooltip && (
                <NavLinkTooltip>
                  <TooltipBox>{notification}</TooltipBox>
                </NavLinkTooltip>
              )}
              </>
              )}
            </NavLink>
          ))}
        </NavMenu>

        <NavMenu>
          <MenuBar>Help & Support</MenuBar>
          {secondaryLinksArray.map(({ label, icon, to, notification }) => (
            <NavLink
              to={to}
              activeStyle
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onClick={handleClick}
              ref={targetRef}
              showOnFocus={isFocused}
              style={!sidebarOpen ? { width: `fit-content` } : {}}
            >
              <LinkIcons>{icon}</LinkIcons>
              {sidebarOpen && (
              <>
              {label}
              {showTooltipSecondary && (
                <NavLinkTooltip>
                  {notification}
                </NavLinkTooltip>
              )}
              </>
              )}
            </NavLink>
          ))}

          <NavBtn style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <ProfilePic />
            
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
    <Head isOpen={sidebarOpen}>
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
    </Head>
    </LayOut>
  </>
  );
};

export default Navbar;
