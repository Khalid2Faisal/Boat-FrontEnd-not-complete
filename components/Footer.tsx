import React from "react";
import {
  FiChevronRight,
  FiTwitter,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { SiUpwork } from "react-icons/si";
import { ImProfile } from "react-icons/im";

export default function Footer() {
  return (
    <div className="container mx-auto pt-16">
      <div className="xl:flex flex-wrap lg:w-11/12 xl:w-full lg:mx-auto">
        <div className="xl:w-3/6 mx-auto xl:mx-0 w-11/12 bg-indigo-700 xl:pl-12 lg:pl-12 pl-6 mb-6 xl:mb-0 pb-20 pt-20 rounded">
          <div className="flex xl:w-3/4 w-11/12 justify-between pb-3 border-b items-end">
            <form className="flex flex-col w-full">
              <label
                htmlFor="email"
                className="text-2xl mb-5 text-white font-medium"
              >
                Sign Up to Receive Product Updates and More
              </label>
              <input
                className="bg-transparent outline-none focus:outline-none text-white placeholder-indigo-300 focus:bg-transparent appearance-none"
                type="text"
                name="email"
                id="email"
                placeholder="youemail@gmail.com"
              />
            </form>
            <div className="cursor-pointer">
              <FiChevronRight className="text-xl text-gray-200" />
            </div>
          </div>
        </div>
        <div className="xl:w-3/6 mx-auto xl:mx-0 w-11/12 flex sm:flex-row items-start lg:justify-around sm:items-center flex-col">
          <div className="xl:w-1/3 xl:ml-24 mb-8 sm:mb-0 sm:w-11/12">
            <p className="text-gray-800 font-bold text-xl mb-3">Office</p>
            <p className="text-base text-gray-600 leading-loose">
              545, Street 11, Block F <br />
              Dean Boulevard, Ohio
            </p>
          </div>
          <div className="xl:w-1/3 xl:flex xl:flex-col xl:items-end">
            <div>
              <p className="text-gray-800 font-bold text-xl mb-3">Contact</p>
              <p className="text-base text-gray-600 mb-3 leading-relaxed">
                +92 302 300 3215
              </p>
              <p className="text-base text-gray-600 break-words">
                ouraddress@email.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-12 xl:px-0 xl:flex lg:flex flex-wrap justify-between sm:mt-20 mt-16 items-center lg:w-11/12 lg:mx-auto pb-6 xl:w-full">
        <div className="w-11/12 xl:w-2/6 lg:w-2/6 mx-auto lg:mx-0 xl:mx-0 mb-6 lg:mb-0 xl:mb-0">
          <p className="text-gray-800 text-base">
            2020 The Good Company. All Right Reserved
          </p>
        </div>
        <div className="w-11/12 xl:w-2/6 lg:w-2/6 mx-auto lg:mx-0 xl:mx-0 mb-6 lg:mb-0 xl:mb-0">
          <ul className="xl:flex lg:flex md:flex sm:flex justify-between">
            <li className="text-gray-800 hover:text-gray-900 text-base pb-1 mb-4 sm:mb-0">
              <a href="#">About Us</a>
            </li>
            <li className="text-gray-800 hover:text-gray-900 text-base pb-1 mb-4 sm:mb-0">
              <a href="#">Our Work</a>
            </li>
            <li className="text-gray-800 hover:text-gray-900 text-base pb-1 mb-4 sm:mb-0">
              <a href="#">Products</a>
            </li>
            <li className="text-gray-800 hover:text-gray-900 text-base pb-1 mb-4 sm:mb-0">
              <a className="border-b-2 border-indigo-700 pb-2" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="w-11/12 xl:w-1/6 lg:w-1/6 sm:w-11/12 mx-auto lg:mx-0 xl:mx-0 mb-6 lg:mb-0 xl:mb-0 mt-8 sm:mt-0">
          <div className="flex justify-start sm:justify-start xl:justify-end space-x-6 pr-2 xl:pr-0 lg:pr-0 md:pr-0 sm:pr-0">
            <div>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FiTwitter className="text-gray-600 text-xl cursor-pointer" />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/Khalid2Faisal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub className="text-gray-600 text-xl cursor-pointer" />
              </a>
            </div>
            <div>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <SiUpwork className="text-gray-600 text-xl cursor-pointer" />
              </a>
            </div>
            <div>
              <a
                href="https://khalid-faisal.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImProfile className="text-gray-600 text-xl cursor-pointer" />
              </a>
            </div>
            <div>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FiLinkedin className="text-gray-600 text-xl cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
