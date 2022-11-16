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
     Chat, 
     Badge
    } from './HeaderElements';
import Logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <>
        {/* ...Header Starts Here... */}
        <Head>

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
        </Head>
    </>
  )
}

export default Header