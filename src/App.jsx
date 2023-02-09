import React from 'react';
import MainLayout from './layout/MainLayout';

export default function App() {
  return (
    <MainLayout>
      <div className="container w-full md:max-w-7xl mx-auto pb-16 pl-4 pr-4 max-w-md overflow-hidden pt-16">
        <div className="md:shrink-0">
          <h1 className="break-normal pt-6 pb-2 text-1xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl title-font">
            Hello there, I&apos;m
            <br />
            <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl pt-6 pb-2">
              Erson Pereira
            </div>
          </h1>
          <div className="font-sans">
            &nbsp;[air-sun pa-re-ra] &nbsp;&nbsp;
            <i className="font-serif"> noun </i>
          </div>
          <div className="py-4">
            <div className="w-full border-t border-secondary-color dark:border-primary-color" />
          </div>
          I am a backend developer who loves a challenge. I prefer working on new and upcoming
          technologies that tickle my fancy. I like to keep my code verbose and well-documented
          as I believe in writing code that humans can understand.
          I write microservices and P2P nodes in Golang while using Postgres and Redis as databases.
          <p>
            I am handy with a RPi and i know my way around Docker, Kubernetes, Go releaser and CI/CD
            platforms like Travis CI and Github Actions.
          </p>
          <br />
          <h1 className="break-normal pt-6 pb-2 text-2xl title-font">
            More about me
          </h1>
          <ul>
            <li>I am an avid gamer</li>
            <li>I am kind of into custom mechanical keyboards</li>
            <li>I built my own computer</li>
            <li>Preferred OS is linux</li>
            <li>Learning Node with Typescript and Tailwind just for fun</li>
            <li>Interested in learning Rust after Node</li>
            <li>And I like pretty things</li>
          </ul>
          <div className="py-4 pt-32">
            <div className="w-24 border-t border-secondary-color dark:border-primary-color" />
          </div>
          <h1 className="break-normal pt-6 pb-2 text-2xl title-font">
            Connect with me
          </h1>
          Email:
          <a href="mailto:ersonpereiracr7@gmail.com" target="_blank" className="inline-block hover:underline decoration-4 mr-4 pl-2" rel="noreferrer">
            ersonpereiracr7@gmail.com
          </a>
          <br />
          LinkedIn:
          <a href="https://www.linkedin.com/in/ersonpereira/" target="_blank" className="inline-block hover:underline decoration-4 mr-4 pl-2" rel="noreferrer">
            ersonpereira
          </a>

        </div>
      </div>
    </MainLayout>
  );
}
