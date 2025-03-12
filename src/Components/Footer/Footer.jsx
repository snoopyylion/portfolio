import React from 'react';
import theme_pattern from '../../assets/theme_pattern.svg';
import user_icon from '../../assets/user_icon.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
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

      <hr className="my-8 border-gray-700" />

      {/* Footer Bottom Section */}
      <div className="footer-bottom flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        {/* Footer Left */}
        <p className="footer-bottom-left text-center md:text-left">
          © 2024 Tifase Oluwaseyi. All rights reserved.
        </p>

        {/* Footer Right */}
        <div className="footer-bottom-right flex flex-col md:flex-row gap-4 text-center md:text-right">
          <p className="cursor-pointer hover:underline">Terms of Services</p>
          <p className="cursor-pointer hover:underline">Privacy Policy</p>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p className="cursor-pointer hover:underline">
              Connect With Me
            </p>
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
