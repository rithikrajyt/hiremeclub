import img2 from "../images/83706503.png";
import img3 from "../images/WhatsApp Image 2023-05-10 at 4.57.56 PM.jpeg";

export const Team = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
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
            <span className="relative">Our</span>
          </span>{" "}
          Team
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Driving Innovation and Success
        </p>
      </div>
      <div className="grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-lg">
        <div className="grid sm:grid-cols-3">
          <div className="relative w-full h-48 max-h-full rounded shadow-2xl sm:h-auto">
            <img
              className="absolute object-cover w-full h-full rounded"
              src={img2}
              alt="Person"
            />
          </div>
          <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
            <p className="text-lg font-bold">Rithik Raj Pandey</p>
            <p className="mb-4 text-xs text-gray-800">Co-Founder, CEO</p>
            <p className="mb-4 text-sm tracking-wide text-gray-800">
              <span style={{ fontWeight: "bold" }}>Rithik Raj Pandey</span>, a
              passionate startup enthusiast, has played a vital role in the
              success and growth of two Indian startups. With expertise in
              business development, Rithik has built a thriving YouTube channel
              with 25,000 subscribers. He has also excelled in various
              hackathons, showcasing his problem-solving abilities through
              technology.
            </p>
            <div className="flex items-center space-x-3">
              <a
                href="https://twitter.com/rithikrajyt/"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 text-blue-500">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </a>
              <a
                href="https://in.linkedin.com/in/rithikrajyt"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 text-blue-800">
  <path d="M20.96 20.96h-4.02v-6.31c0-1.55-0.03-3.54-2.17-3.54c-2.18 0-2.51 1.71-2.51 3.47v6.38h-4.03v-13.76h3.87v1.84h0.06c0.54-1.03 1.88-2.12 3.86-2.12c4.13 0 4.89 2.72 4.89 6.26v7.78z" />
  <path d="M2.08 7.04h4.04v13.76h-4.04zM4.12 2.47c1.34 0 2.43 1.09 2.43 2.43s-1.09 2.43-2.43 2.43s-2.43-1.09-2.43-2.43s1.09-2.43 2.43-2.43z" />
</svg>

              </a>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-3">
          <div className="relative w-full h-48 max-h-full rounded shadow-2xl sm:h-auto">
            <img
              className="absolute object-cover w-full h-full rounded"
              src={img3}
              alt="Person"
            />
          </div>
          <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
            <p className="text-lg font-bold">Sarthak khandelwal</p>
            <p className="mb-4 text-xs text-gray-800">Co-Founder, CTO</p>
            <p className="mb-4 text-sm tracking-wide text-gray-800">
              As our CTO,{" "}
              <span style={{ fontWeight: "bold" }}>Sarthak Khandelwal</span>, a
              tech innovator, excels in complex challenges. Winner of
              Mercedes-Benz hackathon, finalist in Smart India Hackathon, and
              other hackathons. Consistently showcases problem-solving,
              teamwork, and cutting-edge tech skills.
            </p>
            <div className="flex items-center space-x-3">
              <a
                href="https://twitter.com/skk_365"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 text-blue-500">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </a>
              <a
                href="https://in.linkedin.com/in/sarthak-khandelwal-1662aa1b7"
                className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 text-blue-800">
  <path d="M20.96 20.96h-4.02v-6.31c0-1.55-0.03-3.54-2.17-3.54c-2.18 0-2.51 1.71-2.51 3.47v6.38h-4.03v-13.76h3.87v1.84h0.06c0.54-1.03 1.88-2.12 3.86-2.12c4.13 0 4.89 2.72 4.89 6.26v7.78z" />
  <path d="M2.08 7.04h4.04v13.76h-4.04zM4.12 2.47c1.34 0 2.43 1.09 2.43 2.43s-1.09 2.43-2.43 2.43s-2.43-1.09-2.43-2.43s1.09-2.43 2.43-2.43z" />
</svg>

              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
