import React from 'react';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/myprofile.jpg';

const About = () => {
  return (
    <div id="about" data-aos="slide-up" data-aos-duration="900" className="about py-10 px-4 md:px-[5vw] lg:px-[7vw]">
      {/* About Title Section */}
      <div className="about-title text-center mb-8">
        <h1 className="text-4xl prata-regular md:text-6xl font-bold  mb-5">About Me</h1>
      </div>

      {/* About Section */}
      <div className="about-section flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Left Section - Profile Image */}
        <div className="about-left flex-shrink-0 w-full lg:w-1/3">
          <img src={profile_img} alt="Profile" className="rounded-lg w-50 h-52 md:w-60 md:h-60 mx-auto" />
        </div>

        {/* Right Section - About Text */}
        <div className="about-right w-full lg:w-2/3">
          <div className="about-para space-y-4 text-justify">
            <p>
              I’m a passionate Full-Stack Web Application Developer with two years of experience crafting dynamic and
              responsive web applications. My expertise spans across both front-end and back-end technologies, allowing
              me to deliver cohesive and engaging user experiences.
            </p>
            <p>
              I have a solid foundation in HTML, CSS, and JavaScript, which I use to build visually appealing and
              intuitive user interfaces. My proficiency with React.js enables me to create interactive and
              high-performance web applications, while my skills in Django and Python ensure robust and scalable
              back-end solutions.
            </p>
          </div>

          {/* About Skills Section */}
          <div className="about-skills hidden sm:block mt-6">
            <div className="about-skill mb-4">
              <p className="font-semibold">HTML & CSS</p>
              <hr className="w-full border-t-2 border-gray-300" />
            </div>
            <div className="about-skill mb-4">
              <p className="font-semibold">React JS</p>
              <hr className="w-10/12 border-t-2 border-gray-300" />
            </div>
            <div className="about-skill mb-4">
              <p className="font-semibold">Django Python</p>
              <hr className="w-11/12 border-t-2 border-gray-300" />
            </div>
            <div className="about-skill mb-4">
              <p className="font-semibold">Javascript</p>
              <hr className="w-9/12 border-t-2 border-gray-300" />
            </div>
            <div className="about-skill mb-4">
              <p className="font-semibold">Nodejs</p>
              <hr className="w-7/12 border-t-2 border-gray-300" />
            </div>
            <div className="about-skill mb-4">
              <p className="font-semibold">DevOps</p>
              <hr className="w-5/12 border-t-2 border-gray-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="about-achievements mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="about-achievement text-center">
          <h1 className="text-4xl md:text-5xl font-bold">2+</h1>
          <p className="text-sm md:text-base">YEARS OF EXPERIENCE</p>
        </div>
        <hr className="w-full md:w-px border-gray-300 hidden md:block" />
        <div className="about-achievement text-center">
          <h1 className="text-4xl md:text-5xl font-bold">10+</h1>
          <p className="text-sm md:text-base">PROJECTS COMPLETED</p>
        </div>
        <hr className="w-full md:w-px border-gray-300 hidden md:block" />
        <div className="about-achievement text-center">
          <h1 className="text-4xl md:text-5xl font-bold">5+</h1>
          <p className="text-sm md:text-base">HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
