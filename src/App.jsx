import React, { useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWorks from './Components/MyWorks/MyWorks'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease-in-out',
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className='px sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWorks/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
