import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { footerLinks } from "../utils/data";
import { Link } from "react-router-dom";
import TextInput from "./TextInput";
import CustomButton from "./CustomButton";

const Footer = () => {
  return (
    <footer className="text-white mp-20 relative bottom-0 w-full ">
      <div></div>

      <div className="bg-red-600 mt-10 ">
        <div className="container px-3 py-7 mx-auto ">
          <div className="w-full flex flex-wrap gap-10 justify-between mb-15 px-0">
            {footerLinks.map(({ id, title, links }) => (
              <div className="w-auto px-0 " key={id + title}>
                <h2 className="font-medium text-white tracking-widest text-base mb-1">
                  {title}
                </h2>

                <div className="mb-5 flex flex gap-5 pt-5 flex-col">
                  {links.map((link, index) => (
                    <Link
                      key={link + index}
                      to="/"
                      className="text-gray-300 text-sm hover:text-white "
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <p className="container px-3 mx-auto text-white mt-2 ">
            Subscribe to our Newsletter
          </p>

          <div className="container mx-auto px-3 pb-2 mb-2 flex flex-wrap items-center justify-between ">
            <div className="w-full md:w-2/4 lg:w-1/3 h-16 flex items-center justify-center md:justify-start ">
              <TextInput
                styles="w-full flex-grow md:w-40 2xl:w-64 bg-gray-100 sm:mr-4 md-2 text-black"
                type="email"
                placeholder="Email Address"
              />

              <CustomButton
                title="Subscribe"
                containerStyles={
                  "block bg-black text-white px-5 py-2.5 text-md rounded hover:bg-red-900 focus:potline-none flex-col items-center mt-2"
                }
              />
            </div>

            {/* <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <a className="text-white text-xl  hover:scale-125 ease-in-out duration-300">
                <FaFacebookF />
              </a>
              <a className="ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300">
                <FaTwitter />
              </a>
              <a className="ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300">
                <FiInstagram />
              </a>

              <a className="ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300">
                <FaLinkedinIn />
              </a>
            </span> */}
          </div>
        </div>

        <div className="bg-black">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-300 text-sm text-center sm:text-left">
              &copy; 2024 JustHired
              <a
                className="text-[#1199e7] ml-1"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </p>

            {/* <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-300 text-sm">
              Designed by Manav
            </span> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
