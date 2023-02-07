import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';

export default function MainLayout({ children }) {
  return (
    <div className="leading-normal tracking-normal min-h-screen md:min-h-screen text-secondary-color dark:text-primary-color bg-primary-color dark:bg-secondary-color border-8 border-secondary-color dark:border-primary-color">
      <Navbar />
      {children}
    </div>
  );
}

MainLayout.propTypes = { children: PropTypes.node.isRequired };
