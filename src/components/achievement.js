import img1 from "../images/download.png"
import img2 from "../images/download (2).png"
import img3 from "../images/123.jpg"

export const Achievement = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
        {/* <p className="mb-1 text-xs font-semibold tracking-wide uppercase md:mb-2">
          New History
        </p> */}
        <p className="text-base text-gray-700 md:text-lg">
          Celebrating Our Achievements
        </p>
      </div>
      <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
        <div>
          <img
            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
            src={img1}
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Runner-up At Eureka 2023- IIT Bombay
          </h5>
          <p className="text-gray-700">
            We showcased our expertise and innovation in AI-based shortlisting,
            emerging as the runner-ups in the Eureka Business Plan Competition
            and winning a cash prize of 1 lakh rupees.
          </p>
        </div>
        <div>
          <img
            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
            src={img3}
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Finalist at E-Summit 2023- IIT Roorkee
          </h5>
          <p className="text-gray-700">
            We proudly emerged as finalists in the prestigious E-Summit 2023 IIT
            Roorkee, showcasing our exceptional performance and innovative
            approach in AI-based shortlisting.
          </p>
        </div>
        <div>
          <img
            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
            src={img2}
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Finalist at Ideathon 4.0
          </h5>
          <p className="text-gray-700">
            Recognized as finalists at the renowned Ideathon 4.0, our
            exceptional performance and groundbreaking approach in AI-based
            shortlisting solidified our position among the top contenders in
            this highly competitive competition.
          </p>
        </div>
      </div>
    </div>
  );
};
