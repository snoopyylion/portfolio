import React from 'react';
import { motion } from 'framer-motion';
import profile_img from '../../assets/myprofile.jpg';

const About = () => {
  return (
    <div id="about" className="about py-12 px-6 md:px-12 lg:px-20 xl:px-32">
      {/* About Title Section */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold prata-regular mb-4">
          About Me
        </h1>
        <p className="text-base md:text-lg text-customGray max-w-2xl mx-auto">
          A passionate Full-Stack Developer creating seamless digital experiences.
        </p>
      </motion.div>

      {/* About Section */}
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Section - Profile Image */}
        <motion.div 
          className="w-full lg:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={profile_img} 
            alt="Profile" 
            className="rounded-2xl shadow-lg w-72 md:w-80 lg:w-full"
          />
        </motion.div>

        {/* Right Section - About Text */}
        <motion.div 
          className="w-full lg:w-2/3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-5 text-justify text-customGray">
            <p>
              I’m a passionate <strong>Full-Stack Web Application Developer</strong> with two years of experience 
              crafting dynamic and responsive web applications. My expertise spans both front-end and back-end 
              technologies, enabling me to deliver seamless and engaging user experiences.
            </p>
            <p>
              I have a strong foundation in <strong>HTML, CSS, and JavaScript</strong> for building visually appealing 
              and intuitive user interfaces. My proficiency with <strong>React.js</strong> helps me create interactive 
              web applications, while my skills in <strong>Django and Python</strong> ensure robust and scalable 
              back-end solutions.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Achievements Section */}
      <motion.div 
        className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-achievement">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient">3+</h1>
          <p className="text-sm md:text-lg text-customGray">YEARS OF EXPERIENCE</p>
        </div>
        <div className="about-achievement">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient">10+</h1>
          <p className="text-sm md:text-lg text-customGray">PROJECTS COMPLETED</p>
        </div>
        <div className="about-achievement">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient">5+</h1>
          <p className="text-sm md:text-lg text-customGray">HAPPY CLIENTS</p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
