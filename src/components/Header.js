import React from "react";
import img1 from "../images/hero.jpg";

export const Header = () => {
  return (
    <div className="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="mb-16 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Coming Soon!!!
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-15xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Hire interns in
              <span className="inline-block text-deep-purple-accent-400 ml-2">
                24 Hours.
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Revolutionize your hiring process with our AI-based shortlisting
              startup.<br></br>
              <span style={{ fontWeight: 'bold' }}>Stay updated on our latest product launches and become
              one of the early users of our product.</span><br></br><span className="inline-block text-deep-purple-accent-400 ml-2 font-bold shadow">Sign up for early access!</span>
            </p>
          </div>
          <div className="flex items-center">
            <form className="flex flex-wrap w-full mb-4 md:px-4 flex-col md:w-3/4 space-y-4">
              <input
                placeholder="Email"
                required=""
                type="email"
                className="flex flex-col md:2 flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
                <input
                placeholder="Company Name"
                required=""
                type="text"
                className="flex-grow w-full h-12 px-4 mb-2 p-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline "
              />
              <button
                type="submit"
                className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
        <img src={img1} className="" alt="intern hiring Process" />
      </div>
    </div>
  );
};
