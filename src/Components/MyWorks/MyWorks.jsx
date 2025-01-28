import React from 'react';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWorks = () => {
  return (
    <section id="work" data-aos="slide-up" data-aos-duration="900" className="mywork py-10" style={{ backgroundColor: '#161513', color: 'white' }}>
      <div className="container mx-auto">
        {/* Title */}
        <div className="mywork-title text-center mb-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold" style={{ color: 'white' }}>My Latest Work</h1>
        </div>

        {/* Work Items */}
        <div className="mywork-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mywork_data.map((work, index) => (
            <a 
              href={work.w_link} 
              key={index} 
              className="group block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300" 
              style={{ backgroundColor: '#1e1d1b', color: 'white' }}>
              <img 
                src={work.w_img} 
                alt={work.w_name} 
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-sm text-center mb-2" style={{ color: '#a9a9a9' }}>{work.w_no}</h3>
                <h2 className="text-lg font-semibold group-hover:text-blue-500 transition duration-300">
                  {work.w_name}
                </h2>
              </div>
            </a>
          ))}
        </div>

        {/* Show More Button */}
        <div className="mywork-showmore mt-12 text-center">
          <button 
            className="flex items-center justify-center mx-auto font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition duration-300" 
            style={{ backgroundColor: '#282726', color: 'white', border: '1px solid white' }}>
            <span className="mr-2">Show More</span>
            <img src={arrow_icon} alt="Arrow Icon" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyWorks;
