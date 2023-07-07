import recruitment from "../images/recruitment.png";
import hired from "../images/hired.png";
import day from "../images/15day.png"
import click from "../images/4click.png"

export const Feature = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Brand new
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                width="52"
                height="24"
              />
            </svg>
            {/* <span className="relative"></span> */}
          </span>{" "}
          Features
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Finding the right candidate can be a daunting and time-consuming
          process, but not anymore. Our AI-based solution shortlists the best
          candidates for your team using our exclusive 3-step process. Say
          goodbye to manual screening and hello to the future of hiring.
        </p>
      </div>
      <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col justify-center items-center p-5 border rounded shadow-sm">
          <div>
            <div className="w-40 h-40 flex justify-center items-center">
              <img src={recruitment} alt="recruitment icon" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              AI-powered shortlisting process
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              The automated AI-powered shortlisting process helps in
              shortlisting the most skilled candidates for our club.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-5 border rounded shadow-sm">
          <div>
          <div className="w-40 h-40 flex justify-center items-center">
              <img src={hired} alt="instant hired icon" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Instant Hiring </h6>
            <p className="mb-3 text-sm text-gray-900">
              Startups can hire interns instantly from the pool of the most
              skilled candidates with verified proof of work.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-5 border rounded shadow-sm">
          <div>
          <div className="w-40 h-40 flex justify-center items-center">
              <img src={day} alt="15 day candidate-back-guarantee icon" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              15 Day Candidate-Back-Guarantee
            </h6>
            <p className="mb-3 text-sm text-gray-900">
            Experience peace of mind with our 15-day candidate back guarantee, ensuring your satisfaction with every hire
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-5 border rounded shadow-sm">
          <div>
          <div className="w-40 h-40 flex justify-center items-center">
              <img src={click} alt="4 click hiring icon" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              Hire in just 4 Clicks
            </h6>
            <p className="mb-3 text-sm text-gray-900">
            Hire top talent effortlessly with just four clicks using our streamlined process
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
