import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='aboutContainer' id='about'>
        <h1>HOW IS FOUR PLAYED?</h1> 
        <div className='aboutWrapper'>
            <div className='aboutField'>
                <div className='aboutImage img-1'></div>
                <div className='aboutTextSection'>
                    <div className='aboutTextHeader'>LOOTING PHASE</div>
                    <div className='aboutText'>When the match begins, all four corners are blocked off from each other by forcefield walls. There is a short period of time that passes until these walls are shut down, allowing for combat between the corners to commence. This period of time is called the Looting Phase, as this is when the players will be looting to build up strength, preparing to fight when the walls shut down.</div>
                </div> 
            </div>
            <div className='aboutField'>
                <div className='aboutTextSection'>
                    <div className='aboutTextHeader'>PVP PHASE</div>
                    <div className='aboutText'>After the wall shutdown, the four corners fight for control of the map. Full map access is available, so feel free to infiltrate enemy corners or lead an assault on the powerful center of the map!</div>
                </div>            
                <div className='aboutImage img-2'></div>
            </div>
            <div className='aboutField'>
                <div className='aboutImage img-3'></div>
                <div className='aboutTextSection'>
                    <div className='aboutTextHeader'>ENDING PHASE</div>
                    <div className='aboutText'>After a certain amount of time passes in the PVP Phase, in order to speed the game up, gas is released from the outer walls, pushing players into a smaller area to fight. Be careful, because this gas is deadly and can eliminate you and your squad.</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About