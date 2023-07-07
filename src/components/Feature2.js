import marketing from "../images/marketing.png";
import business from "../images/business.png";
import sales from "../images/sales.png";

export const Feature2 = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
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
          Categories
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Empower your HR team to hire top talent across diverse student
          categories with ease from Interns to Freshers, we provide a wide range
          of candidates to meet your hiring needs. Streamline your recruitment
          process and find the perfect fit for your organization
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex flex-col justify-center items-center p-5 border rounded shadow-sm">
          <div>
            <div className="w-40 h-40 flex justify-center items-center">
              <img src={marketing} alt="marketing icon" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              Marketing Candidates
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Discover exceptional marketing candidates and talented interns to
              drive your business growth by partnering with us
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-5 border rounded shadow-sm">
          <div>
            <div className="w-40 h-40 flex justify-center items-center">
              <img src={business} alt="icon by freepik" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              Business Development Candidates{" "}
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Unleash the potential of your business with our exceptional
              Business Development candidates, equipped to drive growth and
              create new opportunities.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-5 border rounded shadow-sm">
          <div>
            <div className="w-40 h-40 flex justify-center items-center">
              <img src={sales} alt="Sales candidates icon" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Sales Candidates</h6>
            <p className="mb-3 text-sm text-gray-900">
              Fuel your sales success with our high-caliber candidates, poised
              to drive revenue growth and exceed targets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
