import React from 'react';
import { motion } from 'framer-motion';
import Services_Data from '../../assets/services_data';

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Services = () => {
  return (
    <motion.section
      id="services"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="services py-12 px-4 md:px-8 lg:px-16 bg-[#161513] text-white"
    >
      {/* Section Heading */}
      <motion.div variants={headingVariants} className="text-center mb-12">
        <h1 className="text-4xl prata-regular md:text-6xl font-bold mb-5">
          My Services
        </h1>
      </motion.div>

      {/* Services Container */}
      <div className="services-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Services_Data.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 20px rgba(255, 105, 180, 0.15)",
            }}
            className="p-6 rounded-lg shadow-lg border border-white transition bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] hover:from-[#3f0028] hover:to-[#582300]"
          >
            <h3 className="text-lg md:text-2xl font-semibold mb-4">
              {service.s_no}
            </h3>
            <h2
              className="text-base md:text-xl font-semibold mb-2"
              style={{
                background: 'linear-gradient(270deg, #4C6A6D 10%, #956464 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {service.s_name}
            </h2>
            <p className="text-gray-300 mb-4 text-center text-sm md:text-base">
              {service.s_desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
