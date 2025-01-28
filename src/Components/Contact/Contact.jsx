import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "ac839278-a0be-4104-97a0-de0edc07f24a");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          alert("Form submitted successfully");
        }
      };
    

  return (
    <div id='contact' data-aos="slide-up" data-aos-duration="900" className='Contact'>
        <div className="contact-title">
            <h1 className="text-3xl prata-regular md:text-6xl font-bold">Get in touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1 className='prata-regular'>Let's talk</h1>
                <p>I'm currently available to take new projects, Let’s connect and explore how we can create something extraordinary together!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>Tifase_oluwaseyi@yahoo.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /> <p>09019586969</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>Lagos,Nigeria</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact