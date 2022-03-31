import React, {useState} from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero';
import About from '../components/About/About'
import Team from '../components/Team/Team';
import News from '../components/News/News';
import Footer from '../components/Footer/Footer';

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  var backgroundId = 1;
  const Backgrounds = [
      '../images/img-1.png',
      '../images/img-2.png',
      '../images/img-3.png'
  ];

  function changeBackground() {
    backgroundId++;
    if (backgroundId >= Backgrounds.length) backgroundId = 0;
    document.getElementById('heroBG').style.backgroundImage = 'url('+Backgrounds[backgroundId]+')';
  }

  setInterval(changeBackground, 15000);
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} navClass='navbarContainer' />  
        <Hero />
        <About />
        <News />
        <Team />
        <Footer className='default' />
    </>
  )
}

export default Homepage