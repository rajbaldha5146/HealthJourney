import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-blue-900 text-white z-10 shadow-md">
      <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
        {/* Logo or Website Name */}
        <div className="text-lg font-semibold">HealthJourney</div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#services" className="hover:text-gray-300">Services</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
