import React from 'react';
import { Link } from 'react-router-dom';
import Switcher from './Switcher';

export default function Navbar() {
  return (
    <nav className="container w-full max-w-7xl mx-auto pt-4 pl-4 pr-4 overflow-hidden flex">
      <Link to="/" className="flex items-center mr-4">
        <span className="font-bold text-xl tracking-tight fill-current text-primary-color dark:text-secondary-color bg-secondary-color dark:bg-primary-color pr-1 pl-1">EP</span>
      </Link>
      <div className="flex-grow flex items-center w-auto">
        <div className="text-sm flex-grow">
          <Link to="/about" className="inline-block hover:underline decoration-4 mr-4">
            about
          </Link>
          <Link to="/contact" className="inline-block hover:underline decoration-4 mr-4">
            contact
          </Link>
        </div>
      </div>
      <div className="flex items-center pt-7">
        <Switcher />
      </div>
    </nav>
  );
}
