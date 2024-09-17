import React from "react";
import { Logo } from "../assets";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-10">
        <div className="md:w-2/3">
          <h1 className="text-4xl  text-gray-800 mb-6">About Us</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to Just Hired, your ultimate destination for discovering the
            perfect job or finding the ideal candidate to join your team. At
            Just Hired, we understand the dynamic nature of today’s job market,
            which is why we offer a comprehensive platform designed to meet the
            needs of both job seekers and employers. Whether you are a seasoned
            professional seeking new career challenges or a company aiming to
            expand your team with top talent, Just Hired provides a seamless and
            intuitive experience to connect you with the right opportunities.
          </p>
        </div>
        <img
          src={Logo}
          alt="Just Hired Logo"
          className="w-64 h-64 object-contain"
        />
      </div>

      {/* Main Content Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At Just Hired, we are dedicated to connecting talent with opportunity
          through a user-friendly platform designed for both job seekers and
          employers. For job seekers, our platform enables you to create a
          personalized account and explore a wide array of career options
          tailored to your skills and aspirations. With advanced job filtering
          by experience level, job type, and location, finding positions that
          match your specific criteria is effortless. Our powerful search tools,
          including options for job title, location, and keywords, make it
          simple to uncover your next career move.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          For employers, Just Hired provides essential tools to enhance your
          recruitment efforts. By creating a company account, you can post job
          openings and access a broad pool of qualified candidates eager to
          contribute to your organization’s success. Our platform streamlines
          the hiring process, allowing you to manage applications efficiently
          and connect with top talent seamlessly.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          At Just Hired, we are committed to bridging the gap between talent and
          opportunity, empowering both individuals and businesses to achieve
          their professional goals. Join us today and advance your career or
          hiring journey with Just Hired.
        </p>
      </div>
    </div>
  );
};

export default About;
