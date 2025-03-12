import React from 'react';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  return (
    <section id="services" data-aos="slide-up" data-aos-duration="3000" className="services py-12 px-4 md:px-8 lg:px-16 bg-[#161513] text-white">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl prata-regular md:text-6xl font-bold mb-5">My Services</h1>
      </div>

      {/* Services Container */}
      <div className="services-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Services_Data.map((service, index) => (
          <div key={index} className="services-format p-6 rounded-lg shadow-lg border border-white transition transform hover:scale-105 hover:border-pink-500 hover:bg-gradient-to-br hover:from-[#3f0028] hover:to-[#582300]">
            <h3 className="text-lg md:text-2xl font-semibold mb-4">{service.s_no}</h3>
            <h2 className="text-base md:text-xl font-semibold mb-2" style={{ background: 'linear-gradient(270deg, #4C6A6D 10%, #956464 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {service.s_name}
            </h2>
            <p className="text-gray-300 mb-4 text-center text-sm md:text-base">{service.s_desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
