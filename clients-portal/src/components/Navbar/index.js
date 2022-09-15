import React, { useState, useRef } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtnLink,
  NavBtn,
  DashBoard,
  SideBar,
  LogoBrand,
  UserPlus,
  UserEdit,
  UsersCog,
  DistributeHori,
  HandsHelp,
  Gear,
  PayMoney,
  PointOfSale,
  ProfilePic,
  NavLinkLogo,
  MenuBar,
  ProfileArea,
  ArrowDown,
  NavLinkTooltip,
  TooltipBox,
  LinkIcons,
} from "./NavbarElements";
import Logo from "../../images/Logo.svg";
import { auth } from "../../firebase";

const Navbar = (position) => {
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

  const linksArray = [
    {
      label: "Main Menu",
      icon: <DashBoard />,
      to: "/",
      notification: "Dashboard",
    },
    {
      label: "Set Up New Client",
      icon: <UserPlus />,
      to: "/set-up-new-client",
      notification: "Set up new client",
    },
    {
      label: "Edit a Client",
      icon: <UserEdit />,
      to: "/edit-a-client",
      notification: "Edit a Client",
    },
    {
      label: "Bulk Updates",
      icon: <UsersCog />,
      to: "/bulk-updates",
      notification: "Bulk Updates",
    },
    {
      label: "Add Expenses",
      icon: <PayMoney />,
      to: "/add-expenses",
      notification: "Add Expenses",
    },
    {
      label: "Add/Edit Sales Revenue",
      icon: <PointOfSale />,
      to: "/add-edit-sales-revenue",
      notification: "Add/Edit Sales Revenue",
    },
    {
      label: "Add/Edit Distribution Revenue",
      icon: <DistributeHori />,
      to: "/add-edit-distribution-revenue",
      notification: "Add/Edit Distribution Revenue",
    },
  ];

  const secondaryLinksArray = [
    {
      label: "Help & Center",
      icon: <HandsHelp />,
      to: "/help-center",
      notification: "Help & Center",
    },
    {
      label: "Settings",
      icon: <Gear />,
      to: "/settings",
      notification: "Settings",
    },
  ];

  return (
    <SideBar>
      <>
        <Bars isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)} />
      </>
      <Nav>
        <NavLinkLogo to="/">
          <LogoBrand src={Logo} />
        </NavLinkLogo>

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
                <NavLinkTooltip position={position}>
                  <TooltipBox position={position}>{notification}</TooltipBox>
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
                <NavLinkTooltip position={position}>
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
      </Nav>
    </SideBar>
  );
};

export default Navbar;
