import React, { useState } from "react";
import { motion } from "framer-motion";
import mywork_data from "../../assets/mywork_data";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Tooltip from "@mui/material/Tooltip";

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
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

const MyWorks = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const totalPages = Math.ceil(mywork_data.length / projectsPerPage);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = mywork_data.slice(indexOfFirstProject, indexOfLastProject);

  return (
    <motion.section
      id="work"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="py-12 px-4 md:px-8 lg:px-16 bg-[#161513] text-white"
    >
      {/* Section Heading */}
      <motion.div variants={headingVariants} className="text-center mb-12">
        <h1 className="text-4xl prata-regular md:text-6xl font-bold mb-5">
          My Latest Work
        </h1>
      </motion.div>

      {/* Work Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProjects.map((work, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(255, 105, 180, 0.2)" }}
            className="p-6 rounded-lg shadow-lg border border-white transition bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] hover:from-[#3f0028] hover:to-[#582300]"
          >
            <img
              src={work.w_img}
              alt={work.w_name}
              className="w-full h-48 object-cover rounded-md transition-transform duration-300 hover:scale-105"
            />
            <div className="mt-4 text-center space-y-2">
              <h3 className="text-sm md:text-base text-gray-400 font-medium">
                Project #{work.w_no}
              </h3>
              <h2 className="text-lg md:text-xl lg:text-2xl text-white font-semibold leading-tight">
                {work.w_name}
              </h2>
              <div className="w-16 h-1 mx-auto bg-pink-500 rounded-full"></div>
            </div>

            {/* Buttons */}
            <div className="mt-4 flex flex-row sm:flex-row gap-4 justify-center items-center">
              <Tooltip title="View source code on GitHub" arrow>
                <button
                  onClick={() => window.open(work.git_hub, "_blank")}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-500 text-white rounded-lg 
                             hover:bg-gray-800 transition-transform transform hover:scale-105 
                             focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  <FaGithub className="text-xl" />
                  <span className="font-medium">GitHub</span>
                </button>
              </Tooltip>

              <Tooltip title="Visit the live project" arrow>
                <button
                  onClick={() => window.open(work.w_link, "_blank")}
                  className="flex items-center gap-2 px-4 py-2 border border-pink-500 text-white rounded-lg 
                             hover:bg-pink-700 transition-transform transform hover:scale-105 
                             focus:outline-none focus:ring-2 focus:ring-pink-400"
                >
                  <FiExternalLink className="text-xl" />
                  <span className="font-medium">Live</span>
                </button>
              </Tooltip>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination Controls */}
      <motion.div
        variants={headingVariants}
        className="mt-12 flex justify-center items-center gap-3"
      >
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-white bg-gray-800 rounded-md transition-all ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600"
          }`}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-2 text-white rounded-md transition-all ${
              currentPage === i + 1
                ? "bg-pink-600 font-bold"
                : "bg-gray-800 hover:bg-gray-600"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 text-white bg-gray-800 rounded-md transition-all ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600"
          }`}
        >
          Next
        </button>
      </motion.div>
    </motion.section>
  );
};

export default MyWorks;
