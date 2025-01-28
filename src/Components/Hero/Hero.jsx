import React from 'react'
import './Hero.css'
import profile_img from '../../assets/newprof.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import cv from '../../assets/OLUWASEYI_TIFASE_Resume_3-3.pdf'
import 'aos/dist/aos.css';

const Hero = () => {

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div id='home' data-aos="fade-left" className='hero'>
        <img data-aos="fade-left" className='rounded-lg' src={profile_img} alt="" />
        <h1 className='prata-regular'> <span>I'm Tifase Oluwaseyi,</span> Full Stack Developer based in Nigeria.</h1>
        <p>
        Hello! I’m Tifase Oluwaseyi, a passionate Full-Stack Web Application Developer 
        with two years of experience crafting dynamic and responsive web applications. My expertise spans across both front-end and back-end technologies, allowing me to deliver cohesive and engaging user experiences 
        </p>
        <div className="hero-action flex flex-col sm:flex-row">
            <div className="hero-connect">
            <AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Connect</p></AnchorLink>
            </div>
            <div className="hero-resume">
              <a href={cv} download={cv}>
                My resume
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero