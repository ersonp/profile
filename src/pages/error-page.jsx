import React from 'react';
import { useRouteError } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <MainLayout>
      <div className="container w-full md:max-w-7xl mx-auto pb-16 pl-4 pr-4 max-w-md overflow-hidden pt-16">
        <div className="md:shrink-0" id="error-page">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl pt-6 pb-2 title-font">Oops!</h1>
          <p className="break-normal pt-6 pb-2 text-1xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl title-font">Sorry, an unexpected error has occurred.</p>
          <p className="font-sans">
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
