import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { BsBoxArrowInLeft } from 'react-icons/bs';
import { ReactComponent as LogoSvg } from '../../../images/Logo.svg';
import { Wrapper, MenuLabel, MenuItem } from './styles';
import { menus } from './data';

const SideBar = ({ isOpen, setIsOpen }) => {
  return (
    <Wrapper isOpen={isOpen}>
      <div className="title">
        <Link to="/">
          <LogoSvg width="160" />
        </Link>

        <BsBoxArrowInLeft
          className="toggle-icon"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      <ul>
        {menus.map((menu) => (
          <Fragment key={menu.label}>
            <li>
              <MenuLabel>{menu.label}</MenuLabel>
            </li>
            {menu?.items.map(({ icon: Icon, label, to }) => (
              <li key={label}>
                <MenuItem to={to}>
                  <Icon />
                  {isOpen && label}
                </MenuItem>
              </li>
            ))}
          </Fragment>
        ))}
      </ul>
    </Wrapper>
  );
};

export default SideBar;
