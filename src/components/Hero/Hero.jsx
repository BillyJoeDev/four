import React from 'react'
import './Hero.css';
import { FaYoutube, FaSteam } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='heroContainer'>
        <div className='heroBG' id='heroBG'></div>
        <div className='heroContent'>
            <div className='heroHeader'>LOOT, PVP & SURVIVE</div>
            <div className='heroParagraph'>4 teams of 4 players on a symetrical map resulting in fast paced pvp.</div>
            <div className='heroButtonWrapper'>
                <div className='heroButton outline' to='purchase'><FaYoutube className='FaYoutube'/> Watch Trailer</div>
                <div className='heroButton' to='purchase'><FaSteam className='FaSteam'/>Buy Four</div>
            </div>
        </div>
    </div>
  )
}

export default Hero