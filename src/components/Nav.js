import { useState } from "react";
import { Link } from "react-scroll";
import favicon from "../images/favicon.png";
import iconsmall from "../images/iconsmall.png"

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="relative flex items-center justify-between">
        <a
          href="/"
          aria-label="HiremeClub Logo"
          title="HiremeClub Logo"
          class="inline-flex items-center"
        >
          <img src={favicon} alt="Logo" class="h-16 w-16 mr-0" />
          <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 font-custom">
            Hireme<span class="text-blue-500">Club</span>
          </span>
        </a>
        <ul class="flex items-center hidden space-x-8 lg:flex">
          <li>
            <Link
              to="Feature"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              delay={100}
              aria-label="Our Feature"
              title="Our Feature"
              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500 cursor-pointer transition duration-300"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="Categories"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              delay={100}
              aria-label="Candidate's Categories"
              title="Candidate's Categories"
              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-accent-500 text-blue-500 hover:text-blue-500 cursor-pointer transition duration-300"
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              to="Categories"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              delay={100}
              aria-label="3 Step Process"
              title="3 Step Process"
              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-accent-500 text-blue-500 hover:text-blue-500 cursor-pointer transition duration-300"
            >
              3-Step Process
            </Link>
          </li>
          <li>
            <Link
              to="Team"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              delay={100}
              aria-label="Our Team"
              title="Our Team"
              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-accent-500 text-blue-500 hover:text-blue-500 cursor-pointer transition duration-300"
            >
              Team
            </Link>
          </li>
          {/*  <li>
            <Link
              to="Achievement"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              delay={100}
              aria-label="Our Achievements"
              title="Our Achievements"
              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-accent-500 text-blue-500 hover:text-blue-500 cursor-pointer transition duration-300"
            >
              Achievements
            </Link>
  </li>*/}
        </ul>
        <ul class="flex items-center hidden space-x-8 lg:flex">
          <li>{/*  We can add login or signup in this sections */}</li>
        </ul>
        <div class="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-blue-50 focus:bg-blue-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div class="absolute top-0 left-0 w-full z-10">
              <div class="p-5 bg-white border rounded shadow-sm">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="HiremeClub logo"
                      title="HiremeClub logo"
                      class="inline-flex items-center"
                    >
                      <img src={iconsmall} alt="Logo" class="h-16 w-16 mr-0" />
                      <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 font-custom">
                        Hireme<span class="text-blue-500">Club</span>
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul class="space-y-4">
                    <li>
                      <Link
                        to="Feature"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        delay={100}
                        aria-label="Our Feature"
                        title="Our Feature"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-accent-500 cursor-pointer"
                      >
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="Why"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        delay={100}
                        aria-label="Why to choose us?"
                        title="Why to choose us?"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-accent-500 cursor-pointer"
                      >
                        Why us?
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="Step"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        delay={100}
                        aria-label="3 Step Process"
                        title="3 Step Process"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-accent-500 cursor-pointer"
                      >
                        3-Step Process
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="Team"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        delay={100}
                        aria-label="Our Team"
                        title="Our Team"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-accent-500 cursor-pointer"
                      >
                        Team
                      </Link>
                    </li>
                    {/*<li>
                      <Link
                        to="Achievement"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        delay={100}
                        aria-label="Our Achievements"
                        title="Our Achievements"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-accent-500"
                      >
                        Achievements
                      </Link>
                    </li>*/}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
