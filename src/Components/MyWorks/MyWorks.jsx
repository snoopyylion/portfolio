import React from 'react';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWorks = () => {
  return (
    <section id="work" data-aos="slide-up" data-aos-duration="900" className="py-12 px-4 md:px-8 lg:px-16 bg-[#161513] text-white">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">My Latest Work</h1>
      </div>

      {/* Work Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mywork_data.map((work, index) => (
          <a
            href={work.w_link}
            key={index}
            className="p-6 rounded-lg shadow-lg border border-white transition transform hover:scale-105 hover:border-pink-500 hover:bg-gradient-to-br hover:from-[#3f0028] hover:to-[#582300]"
          >
            <img src={work.w_img} alt={work.w_name} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />
            <div className="text-center mt-4">
              <h3 className="text-sm text-gray-400">{work.w_no}</h3>
              <h2
                className="text-lg font-semibold"
                style={{ background: 'linear-gradient(270deg, #4C6A6D 10%, #956464 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                {work.w_name}
              </h2>
            </div>
          </a>
        ))}
      </div>

      {/* Show More Button */}
      <div className="mt-12 text-center">
        <button className="flex items-center justify-center mx-auto font-semibold px-6 py-3 rounded-full shadow-md border border-white hover:bg-blue-600 transition duration-300">
          <span className="mr-2">Show More</span>
          <img src={arrow_icon} alt="Arrow Icon" className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default MyWorks;
