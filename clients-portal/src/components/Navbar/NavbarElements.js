import styled from 'styled-components';
import {Link as LinkRouter} from 'react-router-dom';
// import {LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: #ff9900;
    height: 100vh;
    width: 250px;
    //margin-left: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100vh;
    width: 100%;
    z-index: 1;
    padding: 0 24px;
    max-width: 300px;
`

export const NavLogo = styled(LinkRouter)`
 cursor: pointer;
 display: flex;
 align-items: center;
 margin-left: -5px;
 text-decoration: none;
 top: 10px;
 position: absolute;
`

export const LogoBrand = styled.img`
    width: 160px;
`

export const MobileIcons = styled.div`
    display: block;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        transition: 0.8s all ease;
        top: 0;
        left: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    

    @media screen and (max-width: 768px) {
        display: none;
`

export const NavItem = styled.li`
    height: 100%;
    width: 100%;
`

export const NavLinks = styled(LinkRouter)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 1.2rem;

`

export const SlotOne = styled.div`
    display: grid;
    margin: 90px
    width: 150px;
    height: 100%;
`
export const MainMenu = styled.div`
    font-size: 1rem;
    color: #fcfcfc;
    text-transform: uppercase;
    position: relative;
    margin-top: 50px;
`
export const Help = styled.div`
    font-size: 1rem;
    color: #fcfcfc;
    text-transform: uppercase;
`

