import React from 'react'
import {
  Head,
  HeadLink,
  HeadLabel,
  HeadBtnLink,
  HeadInput,
  Search,
  Bell,
  HeadBtns,
  Chat,
} from "./HeaderElements";

const Header = () => {
  return (
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
  )
}

export default Header