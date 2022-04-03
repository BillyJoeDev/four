import React from 'react'
import './Sidebar.css'
import {FaTimes} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <div className={isOpen ? 'sidebarContainer open' : 'sidebarContainer'}>
        <div className='sidebarIcon'>
            <div className='sidebarCloseIcon' onClick={toggle}>
                <FaTimes />
            </div>
        </div>
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
                <NavLink className='sidebarLink' exact to='/' activeclass='active' onClick={toggle}>HOME</NavLink>
                <NavLink className='sidebarLink' to='/news' activeclass='active' onClick={toggle}>NEWS</NavLink>
            </div>
            <div className='sidebarButtonWrap'>
                <div className='sidebarButton' onClick={toggle}>BUY FOUR</div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar