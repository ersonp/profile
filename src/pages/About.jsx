import React from 'react';
import MainLayout from '../layout/MainLayout';

export default function About() {
  return (
    <MainLayout>
      <div className="container w-full md:max-w-7xl mx-auto pb-16 pl-4 pr-4 max-w-md overflow-hidden pt-16">
        <h1 className="break-normal pt-6 pb-2 text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl title-font">
          About
        </h1>
        Backend developer heavily influenced by curiosity and
        <br />
        simplicity. Addicted to music, visual arts, and games.
        <br />
        From India, based in Mumbai.
        <br />

        <div className="py-4">
          <div className="w-full border-t border-secondary-color dark:border-primary-color" />
        </div>

        <h1 className="break-normal pt-6 pb-2 text-2xl title-font">
          Main skills
        </h1>
        <div className="container w-full max-w-7xl mx-auto pt-1 overflow-hidden flex">
          <div className="flex-grow flex w-auto flex-col md:flex-row flex-wrap list-none mb-4">
            <div className="text-sm flex-grow pr-2 pb-2">
              Backend, microservices
            </div>
            <div className="text-sm flex-grow pr-2 pb-2">
              P2P communication,
              <br />
              Core Blockchain development
            </div>
            <div className="text-sm flex-grow pr-2 pb-2">
              Golang, Python, JavaScript, CSS, HTML, React,
              <br />
              Shell Script
            </div>
            <div className="text-sm flex-grow pb-2">
              Docker, Kubernetes, Go releaser, Travis CI,
              <br />
              Github Actions.
            </div>
          </div>
        </div>

        <h1 className="break-normal pt-6 pb-2 text-2xl title-font">
          Experience
        </h1>
        <div className="container w-full max-w-7xl mx-auto pt-1 overflow-hidden flex">
          <div className="flex-grow flex w-auto flex-col md:flex-row flex-wrap list-none mb-4">
            <div className="flex-grow pr-2 pb-2">
              Go Developer
              <div className="text-sm">
                @ Skycoin
                <br />
                *current
              </div>
            </div>
            <div className="flex-grow pr-2 pb-2">
              Software Developer
              <div className="text-sm">
                @ Chrisel Technolab
                <br />
                *2019-2021
              </div>
            </div>
            <div className="flex-grow pr-2 pb-2">
              Jr. Software Developer
              <div className="text-sm">
                @ Dquip
                <br />
                *2018-2018
              </div>
            </div>
          </div>
        </div>

        <h1 className="break-normal pt-6 pb-2 text-2xl title-font">
          Languages
        </h1>
        <div className="container w-full max-w-7xl mx-auto pt-1 overflow-hidden flex">
          <div className="flex-grow flex w-auto flex-col md:flex-row flex-wrap list-none mb-4">
            <div className="flex-grow pr-2 pb-2">
              en-US English
            </div>
          </div>
        </div>

        <h1 className="break-normal pt-6 pb-2 text-2xl title-font">
          Also busy with
        </h1>
        <div className="container w-full max-w-7xl mx-auto pt-1 overflow-hidden flex">
          <div className="flex-grow flex w-auto flex-col md:flex-row flex-wrap list-none mb-4">
            <div className="flex-grow pr-2 pb-2">
              Games
            </div>
            <div className="flex-grow pr-2 pb-2">
              Trying different cuisines
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
