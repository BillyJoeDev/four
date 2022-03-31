import React, { useState } from 'react'
import './Navbar.css'
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import { NavLink } from 'react-router-dom'

const Navbar = ({toggle, navClass}) => {
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
        <div className={navbar ? navClass + ' background' : navClass}>
            <div className='navbarLogo' onClick={toggleHome}>FOUR</div>
            <div className='navbarMobileIcon' onClick={toggle}>
                <FaBars />
            </div>
            <div className='navbarMenu'>
                <div className='navbarItem'>
                    <NavLink className='navbarLinks' exact to='/' activeclass='active'>Home</NavLink>
                </div>
                <div className='navbarItem'>
                    <NavLink className='navbarLinks' to='/news' activeclass='active'>News</NavLink>
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