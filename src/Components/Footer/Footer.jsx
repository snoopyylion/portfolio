import React from 'react';
import { motion } from 'framer-motion';
import theme_pattern from '../../assets/theme_pattern.svg';
import user_icon from '../../assets/user_icon.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <div data-aos="slide-up" data-aos-duration="1500" className="Footer bg-[#161513] text-white py-10 px-4 sm:px-6 md:px-12 lg:px-24">
      {/* Footer Top Section */}
      <div className="footer-top flex flex-col lg:flex-row justify-between items-start gap-8">
        {/* Footer Left Section */}
        <div className="lg:w-2/3 space-y-6">
          <div className="logo flex items-center gap-3">
            <h1 className="text-3xl font-bold text-white">Oluwaseyi</h1>
            <img src={theme_pattern} alt="pattern" className="w-12" />
          </div>
          <p className="text-sm md:text-base leading-relaxed">
            I’m a passionate Full-Stack Web Application Developer with two years of experience crafting dynamic and
            responsive web applications. My expertise spans across both front-end and back-end technologies, allowing me
            to deliver cohesive and engaging user experiences.
          </p>
          {/* Social Icons Section */}
          <motion.div 
                  className="hero-social-icons"
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
        </div>

        {/* Footer Right Section - Subscribe */}
        <div className="lg:w-1/3">
          <div className="footer-email-input flex items-center bg-white text-black rounded-md px-4 py-2 mb-4 w-full">
            <img src={user_icon} alt="User Icon" className="w-6 h-6 mr-2" />
            <input
              type="email"
              placeholder="Enter your email"
              className="outline-none bg-transparent w-full text-black"
            />
          </div>
          <div className="bg-gradient-to-l from-[#4C6A6D] to-[#956464] text-white text-lg py-3 px-20 text-center rounded-md cursor-pointer hover:opacity-80 transition-all">
            Subscribe
          </div>
        </div>
      </div>


      {/* Footer Bottom Section */}
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>© 2024 Tifase Oluwaseyi. All rights reserved.</p>
        <div className="footer-links">
          <p className="footer-link">Terms of Service</p>
          <p className="footer-link">Privacy Policy</p>
          <AnchorLink offset={50} href="#contact">
            <p className="footer-link">Connect With Me</p>
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
