import React from 'react'
import './Sidebar.css'
import {FaTimes} from 'react-icons/fa'

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
                <div className='sidebarLink' onClick={toggle}>About</div>
                <div className='sidebarLink' onClick={toggle}>News</div>
                <div className='sidebarLink' onClick={toggle}>Our Team</div>
            </div>
            <div className='sidebarButtonWrap'>
                <div className='sidebarButton' onClick={toggle}>Buy Four</div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar