import React from 'react'
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
    } from './HeaderElements'

const Header = () => {
  return (
    <>
        {/* ...Header Starts Here... */}
        <Head>
        
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
    </>
  )
}

export default Header