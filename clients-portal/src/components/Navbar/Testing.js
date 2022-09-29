import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { linksArray, secondaryLinksArray } from './NavbarData'
import { Bars } from './NavbarElements';
import './TestingStyles.css';


const Testing = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <Bars onClick={showSidebar} />
        </Link>
      </div>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
            </Link>
          </li>
          {linksArray.map((item, index) => {
            return (
                <li key={index} className={item.cName}>
                    <Link to={item.to}>
                        {item.icon}
                        <span>{item.label}</span>
                    </Link>
                </li>
            )
          })}

          {secondaryLinksArray.map((item, index) => {
                      return (
                          <li key={index} className={item.cName}>
                              <Link to={item.to}>
                                  {item.icon}
                                  <span>{item.label}</span>
                              </Link>
                          </li>
                      )
          })}
        </ul>
      </nav>
    </>
  );
}

export default Testing