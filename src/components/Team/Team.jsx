import React from 'react'
import { FaYoutube, FaGithub, FaArtstation } from 'react-icons/fa'
import './Team.css'

const Team = () => {
  const ourTeam = [
    { name: "Connor", role: "Studio Head & Art Director", color: "#1c1f20", avatar: "images/avatars/connor.webp", socialLinks: { youtube: "", github: "", artstation: "https://www.artstation.com/connorb3d" } },
    { name: "Ryan", role: "Project Manager", color: "#1c1f20", avatar: "images/avatars/ryan.webp", socialLinks: { youtube: "", github: "", artstation: "https://www.artstation.com/ryanlevac" } },
    { name: "Cameron", role: "Lead Programmer", color: "#1c1f20", avatar: "images/avatars/cameron.webp", socialLinks: { youtube: "https://www.youtube.com/channel/UC3DPVEG4Nhgeylw6EhAasSQ", github: "https://github.com/IRSMsoso", artstation: "" } },
    { name: "Tengo", role: "Programmer & Animator", color: "#1c1f20", avatar: "images/avatars/tengo.webp", socialLinks: { youtube: "https://www.youtube.com/channel/UCmx4gGmsSBYA_G4QqVeXUng", github: "https://github.com/Tengoz", artstation: "https://www.artstation.com/artwork/X1glWn" } },
    { name: "Travis", role: "Website Developer", color: "#1c1f20", avatar: "images/avatars/billyjoe.jpg", socialLinks: { youtube: "", github: "https://github.com/TravisDevLife", artstation: "" } },
    { name: "Robin", role: "Level Designer & Animator", color: "#1c1f20", avatar: "images/avatars/runkle.webp", socialLinks: { youtube: "https://www.youtube.com/channel/UCbzIQfF8efrF9YMsxuNzpEw", github: "", artstation: "https://www.artstation.com/runkletookle" } },
    { name: "Noah", role: "Technical & Environment Art", color: "#1c1f20", avatar: "images/avatars/noah.webp", socialLinks: { youtube: "", github: "", artstation: "https://www.artstation.com/thearkitect" } },
    { name: "Derek", role: "Level Designer", color: "#1c1f20", avatar: "images/avatars/derek.webp", socialLinks: { youtube: "", github: "", artstation: "https://www.artstation.com/derekschenck" } },
    { name: "Zuse", role: "Sound Design", color: "#1c1f20", avatar: "images/avatars/zuse.webp", socialLinks: { youtube: "https://www.youtube.com/channel/UC5Bp6lJ8GkiKp_o0IXTBJ3Q", github: "", artstation: "" } },
    { name: "Tay", role: "Music Artist", color: "#1c1f20", avatar: "images/avatars/tay.webp", socialLinks: { youtube: "", github: "", artstation: "" } },
  ];

  return (
    <div className='teamContainer' id='team'>
      <h1>VIEW OUR TEAM</h1>
      <div className='our-team-grid'>
        {
          ourTeam.map(member => 
          {
            return (
              <div className='team-member'>
                <img src={member.avatar} className='team-member-avatar'></img>
                <h2 className='team-member-name'>{member.name}</h2>
                <div className='member-social-icons'>
                  { member.socialLinks.youtube != "" ? <a href={member.socialLinks.youtube} target="_blank" rel="noreferrer"><FaYoutube className='social-icon youtube' /></a> : null }
                  { member.socialLinks.github != "" ? <a href={member.socialLinks.github} target="_blank" rel="noreferrer"><FaGithub className='social-icon github' /></a> : null }
                  { member.socialLinks.artstation != "" ? <a href={member.socialLinks.artstation} target="_blank" rel="noreferrer"><FaArtstation className='social-icon artstation' /></a> : null }
                </div>
                <h3 className='team-member-role' style={ {backgroundColor: member.color}}>{member.role}</h3>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default Team