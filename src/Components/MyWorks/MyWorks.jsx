import React, { useState } from "react";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import { FaGithub } from "react-icons/fa"; // GitHub icon
import { FiExternalLink } from "react-icons/fi"; // External link icon
import Tooltip from "@mui/material/Tooltip"; // Tooltip from Material UI

const MyWorks = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Calculate total pages
  const totalPages = Math.ceil(mywork_data.length / projectsPerPage);

  // Get current page projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = mywork_data.slice(indexOfFirstProject, indexOfLastProject);

  return (
    <section
      id="work"
      data-aos="slide-up"
      data-aos-duration="1500"
      className="py-12 px-4 md:px-8 lg:px-16 bg-[#161513] text-white"
    >
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl prata-regular md:text-6xl font-bold mb-5">
          My Latest Work
        </h1>
      </div>

      {/* Work Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProjects.map((work, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-lg border border-white transition transform hover:scale-105 hover:border-pink-500 hover:bg-gradient-to-br hover:from-[#3f0028] hover:to-[#582300]"
          >
            <img
              src={work.w_img}
              alt={work.w_name}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
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


            {/* Buttons for GitHub and Live Project */}
            <div className="mt-4 flex flex-row sm:flex-row gap-4 justify-center items-center">
              {/* GitHub Button */}
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

              {/* Live Project Button */}
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
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-12 flex justify-center items-center gap-3">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-white bg-gray-800 rounded-md transition-all ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600"
          }`}
        >
          Prev
        </button>

        {/* Page Numbers */}
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
      </div>
    </section>
  );
};

export default MyWorks;
