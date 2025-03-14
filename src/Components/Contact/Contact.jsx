import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import { Tooltip } from '@mui/material';
import Button from '../Buttton/Button';

const Contact = () => {
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "ac839278-a0be-4104-97a0-de0edc07f24a");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        toast.success("Message sent successfully!", { position: "top-right" });
        formRef.current.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error! Please try again later.");
    }
  };

  return (
    <motion.div 
      id='contact' 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: 'easeOut' }} 
      className='contact-container'
    >
      <ToastContainer />
      
      {/* Title */}
      <div className="contact-title">
        <h1 className="text-3xl md:text-5xl font-bold prata-regular text-center">Get in touch</h1>
      </div>

      {/* Contact Section */}
      <div className="contact-content">
        
        {/* Left Side - Contact Info */}
        <motion.div 
          className="contact-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="prata-regular text-xl md:text-3xl font-semibold">Let's talk</h2>
          <p className="text-gray-400 mt-2">
            I'm currently available to take new projects. Let’s connect and explore how we can create something amazing together!
          </p>
          
          {/* Contact Details */}
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Email Icon" />
              <p><a href="mailto:Tifase_oluwaseyi@yahoo.com">Tifase_oluwaseyi@yahoo.com</a></p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Phone Icon" />
              <p><a href="tel:+2349019586969">+234 901 958 6969</a></p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location Icon" />
              <p>Lagos, Nigeria</p>
            </div>
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
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.form 
          ref={formRef} 
          onSubmit={onSubmit} 
          className="contact-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" required />

          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" required />

          <label>Message</label>
          <textarea name="message" rows="5" placeholder="Enter your message" required></textarea>

<Tooltip title="Submit Message" arrow>
<button className="flex m-auto items-center gap-2 px-4 py-2 border border-pink-500 text-white rounded-lg hover:bg-pink-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400">
  <span className="font-medium">Submit</span>
</button>

              </Tooltip>
          {/* <button type="submit" className="contact-submit">Submit now</button> */}
        </motion.form>

      </div>
    </motion.div>
  );
};

export default Contact;
