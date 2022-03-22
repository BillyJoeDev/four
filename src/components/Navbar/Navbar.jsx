import React, { useState } from 'react'
import './Navbar.css'
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import { Link as LinkS } from 'react-scroll'
const Navbar = ({toggle}) => {
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    window.addEventListener('scroll', changeBackground);

    return (
    <>
        <div className={navbar ? 'navbarContainer background' : 'navbarContainer'}>
            <div className='navbarLogo' onClick={toggleHome}>FOUR</div>
            <div className='navbarMobileIcon' onClick={toggle}>
                <FaBars />
            </div>
            <div className='navbarMenu'>
                <div className='navbarItem'>
                    <LinkS className='navbarLinks' to='about' activeClass='active' smooth={true} duration={500} spy={true} exact='true' offset={-130}>About</LinkS>
                </div>
                <div className='navbarItem'>
                    <LinkS className='navbarLinks' to='news' activeClass='active' smooth={true} duration={500} spy={true} exact='true' offset={-50}>News</LinkS>
                </div>
                <div className='navbarItem'>
                    <LinkS className='navbarLinks' to='team' activeClass='active' smooth={true} duration={500} spy={true} exact='true' offset={-50}>Our Team</LinkS>
                </div>
                <div className='navbarButton'>
                    <div className='navbarButtonLink'>Buy Four</div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Navbar