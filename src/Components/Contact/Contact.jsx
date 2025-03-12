import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import { ToastContainer } from 'react-toastify';

const Contact = () => {
  const formRef = useRef(null); // Create a reference for the form

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "ac839278-a0be-4104-97a0-de0edc07f24a");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      toast.success("Form submitted successfully!");
      formRef.current.reset(); // Reset the form fields
    }
  };

  return (
    <motion.div 
      id='contact' 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: 'easeOut' }} 
      className='Contact'
    >
      <ToastContainer />
      <div className="contact-title">
        <h1 className="text-3xl prata-regular md:text-6xl font-bold">Get in touch</h1>
      </div>
      <div className="contact-section">
        <motion.div 
          className="contact-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className='prata-regular'>Let's talk</h1>
          <p>I'm currently available to take new projects, let’s connect and explore how we can create something extraordinary together!</p>
          <div className="contact-details">
            <div className="contact-detail"><img src={mail_icon} alt="" /> <p>Tifase_oluwaseyi@yahoo.com</p></div>
            <div className="contact-detail"><img src={call_icon} alt="" /> <p>09019586969</p></div>
            <div className="contact-detail"><img src={location_icon} alt="" /> <p>Lagos, Nigeria</p></div>
          </div>
        </motion.div>
        <motion.form 
          ref={formRef} // Attach the ref to the form
          onSubmit={onSubmit} 
          className="contact-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <label>Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' required />
          <label>Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' required />
          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
          <button type='submit' className="contact-submit">Submit now</button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
