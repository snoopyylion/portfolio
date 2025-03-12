import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import profile_img from '../../assets/newprof.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import cv from '../../assets/OLUWASEYI_TIFASE_Resume_3-3.pdf';

const Hero = () => {
  return (
    <motion.div 
      id="home" 
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Profile Image */}
      <motion.img 
        src={profile_img} 
        alt="Profile" 
        className="hero-img rounded-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Hero Title */}
      <motion.h1 
        className="prata-regular hero-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <span>I'm Tifase Oluwaseyi,</span> Full Stack Developer based in Nigeria.
      </motion.h1>

      {/* Hero Description */}
      <motion.p 
        className="hero-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Hello! I’m Tifase Oluwaseyi, a passionate Full-Stack Web Application Developer 
        with two years of experience crafting dynamic and responsive web applications. 
        My expertise spans across both front-end and back-end technologies, allowing me 
        to deliver cohesive and engaging user experiences.
      </motion.p>

      {/* Call-to-Action Buttons */}
      <motion.div 
        className="hero-action"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href={cv} download={cv}>
            My resume
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
