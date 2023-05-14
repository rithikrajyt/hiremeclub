import cv from "../images/cv.png";
import assignment from "../images/assignment.png";
import interview from "../images/interview.png";
import proof from "../images/proof.png";


export const Step = () => {
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
            <span className="relative">Exclusive</span>
          </span>{" "}
          3-Step process to Shortlist talented Candidates
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Experience an advanced hiring process with our AI-powered 3-step
          shortlisting approach designed to bring you the best and most talented
          candidates for your business needs.
        </p>
      </div>
      <div className="grid gap-10 lg:grid-cols-4 sm:grid-cols-2">
        <div>
          <div className="flex flex-col items-center justify-between mb-6">
            <div className="w-2/3">
            <img src={cv} alt="CV Icon" />
            </div>
            <p className="text-2xl font-bold w-2/3">Resume Shortlisting</p>
            <svg
              className="w-6 text-gray-700 transform rotate-90 sm:rotate-0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line
                fill="none"
                strokeMiterlimit="10"
                x1="2"
                y1="12"
                x2="22"
                y2="12"
              />
              <polyline
                fill="none"
                strokeMiterlimit="10"
                points="15,5 22,12 15,19 "
              />
            </svg>
          </div>
          <p className="text-gray-600">
            Our AI algorithm shortlists candidates based on some basic criteria.
          </p>
        </div>
        <div>
          <div className="flex flex-col items-center justify-between mb-6">
          <div className="w-2/3">
        <img src={assignment} alt="Assignment icon" />
</div>
            <p className="text-2xl font-bold w-2/3"> Assignment</p>
            <svg
              className="w-6 text-gray-700 transform rotate-90 sm:rotate-0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line
                fill="none"
                strokeMiterlimit="10"
                x1="2"
                y1="12"
                x2="22"
                y2="12"
              />
              <polyline
                fill="none"
                strokeMiterlimit="10"
                points="15,5 22,12 15,19 "
              />
            </svg>
          </div>
          <p className="text-gray-600">
            Candidates are given AI-generated assignments related to their
            field, which are automatically checked.
          </p>
        </div>
        <div>
          <div className="flex flex-col items-center justify-between mb-6">
          <div className="w-2/3">
          <img src={interview} alt="Interview Icon" />
</div>
            <p className="text-2xl font-bold w-2/3">Technical Interview</p>
            <svg
              className="w-6 text-gray-700 transform rotate-90 sm:rotate-0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line
                fill="none"
                strokeMiterlimit="10"
                x1="2"
                y1="12"
                x2="22"
                y2="12"
              />
              <polyline
                fill="none"
                strokeMiterlimit="10"
                points="15,5 22,12 15,19 "
              />
            </svg>
          </div>
          <p className="text-gray-600">
            We conduct a technical interview with top candidates to ensure the
            best fit for your organization.
          </p>
        </div>
        <div>
          <div className="flex flex-col items-center justify-between mb-6">
          <div className="w-2/3">
          <img src={proof} alt="Proof-of-Work Verified" />
</div>
            <p className="text-2xl font-bold w-2/3">Proof of Work Verified!!</p>
            <svg
              className="w-8 text-gray-600"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <polyline
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="6,12 10,16 18,8"
              />
            </svg>
          </div>
          <p className="text-gray-600">
            Get the best talent in the industry with our 3-step process. Sign up
            today!
          </p>
        </div>
      </div>
    </div>
  );
};
