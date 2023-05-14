export const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <svg
              className="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              HiremeClub
            </span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              Welcome to our AI-powered hiring solution. Streamline your
              recruitment process and discover top talent effortlessly. For
              inquiries and feedback, contact us. Experience the future of
              hiring with us today
            </p>
            {/* <p className="mt-4 text-sm text-gray-800">
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
            </p> */}
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Phone:</p>
            <a
              href="tel:+91-700-439-5760"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              700-439-5760
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a
              href="mailto:sarthak@hiremeclub.com"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              sarthak@hiremeclub.com
            </a>
          </div>
          {/* <div className="flex"> */}
          {/* <p className="mr-1 text-gray-800">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              312 Lovely Street, NY
            </a> */}
          {/* </div> */}
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="https://twitter.com/rithikrajyt/"
              className="text-gray-500 transition-colors duration-300 hover:text-blue-accent-400"
            >
           <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 text-blue-500">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
            </a>
            <a
              href="https://in.linkedin.com/in/rithikrajyt"
              className="text-gray-500 transition-colors duration-300 hover:text-blue-accent-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 text-blue-800">
  <path d="M20.96 20.96h-4.02v-6.31c0-1.55-0.03-3.54-2.17-3.54c-2.18 0-2.51 1.71-2.51 3.47v6.38h-4.03v-13.76h3.87v1.84h0.06c0.54-1.03 1.88-2.12 3.86-2.12c4.13 0 4.89 2.72 4.89 6.26v7.78z" />
  <path d="M2.08 7.04h4.04v13.76h-4.04zM4.12 2.47c1.34 0 2.43 1.09 2.43 2.43s-1.09 2.43-2.43 2.43s-2.43-1.09-2.43-2.43s1.09-2.43 2.43-2.43z" />
</svg>
            </a>
         
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Stay connected with us on social media for the latest updates,
            industry insights, and exciting opportunities in the world of
            AI-driven hiring.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2023 | HirePreneurs Technologies Private Limited | All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
