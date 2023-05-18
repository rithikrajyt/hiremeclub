import img1 from "../images/download.png";
import img2 from "../images/download (2).png";
import img3 from "../images/123.jpg";

export const Achievement = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
        {/* <p className="mb-1 text-xs font-semibold tracking-wide uppercase md:mb-2">
          New History
        </p> */}
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="b902cd03-49cc-4166-a0ae-4ca1c31cedba"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#b902cd03-49cc-4166-a0ae-4ca1c31cedba)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Celebrating </span>
          </span>{" "}
          Our Achievements
        </h2>
        <p className="text-base text-gray-700 md:text-lg"></p>
        <p className="text-base text-gray-700 md:text-lg">
          Honoring Our Outstanding Achievements
        </p>
      </div>
      <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
        <div className="border-4 border-gray-300 rounded-lg p-3">
          <img
            className="object-cover w-full h-64 mb-6 rounded shadow-2xl-lg lg:h-80 xl:h-96"
            src={img1}
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Runner-up At Eureka 2023- IIT Bombay
          </h5>
          <p className="text-gray-700">
            Runner-ups in Eureka Business Plan Competition, winning 1 lakh
            rupees for solving Intern hiring problem by startups.
          </p>
        </div>
        <div className="border-4 border-gray-300 rounded-lg p-3">
          <img
            className="object-cover w-full h-64 mb-6 rounded shadow-2xl-lg lg:h-80 xl:h-96"
            src={img3}
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Finalist at E-Summit 2023- IIT Roorkee
          </h5>
          <p className="text-gray-700">
            E-Summit 2023 IIT Roorkee finalist with startup intern hiring
            solution.
          </p>
        </div>
        <div className="border-4 border-gray-300 rounded-lg p-3">
          <img
            className="object-cover w-full h-64 mb-6 rounded shadow-2xl-lg lg:h-80 xl:h-96"
            src={img2}
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Winner at Ideathon 4.0 at NMIT,Bangalore
          </h5>
          <p className="text-gray-700">
            We were the winners at IDEATHON 4.0 organized by ENIGMA with our
            startup plan, HiremeClub.AI
          </p>
        </div>
      </div>
    </div>
  );
};
