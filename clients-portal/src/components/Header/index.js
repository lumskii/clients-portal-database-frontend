import React from 'react'
import { LogoBrand } from '../Navbar/NavbarElements'
import {
     Bell, 
     Head,
     HeadLink,
     HeadLabel,
     HeadBtnLink,
     HeadInput,
     Search,
     HeadBtns,
     Chat 
    } from './HeaderElements';
import Logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <>
        {/* ...Header Starts Here... */}
        <Head>
        
        <HeadLink to="/">
          <LogoBrand src={Logo} />
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
    </>
  )
}

export default Header