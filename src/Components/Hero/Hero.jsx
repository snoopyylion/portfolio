import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import profile_img from '../../assets/newprof.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import cv from '../../assets/OLUWASEYI_TIFASE_Resume_3-3.pdf';

// Import Social Icons from react-icons
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

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
        <div className="hero-resume ">
          <a href={cv} download={cv}>
            My resume
          </a>
        </div>
      </motion.div>

      {/* Social Icons Section */}
      <motion.div 
        className="hero-social-icons mt-6 flex justify-center space-x-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        {/* GitHub */}
        <motion.a 
          href="https://github.com/snoopyylion" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="social-icon"
        >
          <FaGithub className="text-gray-300 text-2xl md:text-3xl hover:text-white transition" />
        </motion.a>

        {/* LinkedIn */}
        <motion.a 
          href="https://www.linkedin.com/in/oluwaseyi-tifase-3a61aa27b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="social-icon"
        >
          <FaLinkedin className="text-gray-300 text-2xl md:text-3xl hover:text-blue-500 transition" />
        </motion.a>

        {/* Twitter */}
        <motion.a 
          href="https://x.com/snoopylion_?s=21" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="social-icon"
        >
          <FaTwitter className="text-gray-300 text-2xl md:text-3xl hover:text-blue-400 transition" />
        </motion.a>

        {/* Email */}
        <motion.a 
          href="mailto:tifase_oluwaseyi@yahoo.com"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="social-icon"
        >
          <FaEnvelope className="text-gray-300 text-2xl md:text-3xl hover:text-red-500 transition" />
        </motion.a>
      </motion.div>

    </motion.div>
  );
};

export default Hero;
