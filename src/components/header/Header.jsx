import React from 'react'

export default function Header() {
  return (
    <header className="pb-16 bg-white lg:pb-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <a href="/" className="flex">
              <img
                className="w-auto h-8 lg:h-10"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                alt=""
              />
            </a>
          </div>
          {/* menu icon */}
          <button className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
            <svg
              className="  block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            </svg>
            {/* close icon */}
            <svg
              className="hidden sm:block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {/* links session */}
          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <a className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
              Features
            </a>
            <a className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
              Solutions
            </a>
            <a className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
              Resources
            </a>
            <a className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
              Pricing
            </a>
          </div>
          <a
            className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
            role="button"
          >
            Get started now
          </a>
        </nav>
      </div>
    </header>
  );
}
