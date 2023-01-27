import React from 'react';
import Name from './Name';
import Navbar from './Navbar';

function App() {
  return (
    <div className="leading-normal tracking-normal min-h-screen md:min-h-screen text-secondary-color dark:text-primary-color bg-primary-color dark:bg-secondary-color border-8 border-secondary-color dark:border-primary-color">
      <Navbar />
      <Name />
    </div>
  );
}

export default App;
