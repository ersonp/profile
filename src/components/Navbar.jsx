import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Switcher from './Switcher';

export default function Navbar() {
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  return (
    <nav className="container w-full max-w-7xl mx-auto pt-4 pl-4 pr-4 overflow-hidden flex">
      <Link to="/" className="flex items-center mr-4">
        <span className="font-bold text-xl tracking-tight fill-current text-primary-color dark:text-secondary-color bg-secondary-color dark:bg-primary-color pr-1 pl-1">EP</span>
      </Link>
      <div className="flex-grow flex items-center w-auto">
        <div className="text-sm flex-grow">
          <Link to="/about" className={`inline-block hover:underline decoration-4 mr-4 ${url === '/about' ? 'underline' : ''}`}>
            about
          </Link>
          <Link to="/contact" className={`inline-block hover:underline decoration-4 mr-4 ${url === '/contact' ? 'underline' : ''}`}>
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
