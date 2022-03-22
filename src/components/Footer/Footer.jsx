import React from 'react'
import { FaDiscord, FaYoutube, FaTwitter } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <h1>© 2022 Real Pixel Studios. All rights reserved.</h1>
        <div className='social-icons'>
            <a href='https://discord.gg/kjSmMK7PzA' target='_blank'><FaDiscord className='social-icon discord' /></a>
            <a href='https://discord.gg/kjSmMK7PzA' target='_blank'><FaYoutube className='social-icon youtube' /></a>
            <a href='https://discord.gg/kjSmMK7PzA' target='_blank'><FaTwitter className='social-icon artstation' /></a>
        </div>
    </footer>
  )
}

export default Footer