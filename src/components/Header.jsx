import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className=" w-full bg-blue-500 text-white shadow-md z-10">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">HealthJourney</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/diet-plan" className="hover:underline">
              My Diet Plan
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:underline">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
