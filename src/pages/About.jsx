import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from '../layout/MainLayout';

function AboutLayout({ aboutInfo }) {
  return (
    <div>
      <h1 className="break-normal pt-6 pb-2 text-2xl title-font">
        {aboutInfo.title}
      </h1>
      <div className="container w-full max-w-7xl mx-auto pt-1 overflow-hidden flex">
        <div className="flex-grow flex w-auto flex-col md:flex-row flex-wrap list-none mb-4">
          {aboutInfo.contents.map((e) => (
            <div className="flex-grow pr-2 pb-2 break-normal w-72 ">
              {e.title}
              <div className="text-sm">
                {e?.content}
                <br />
                {e?.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const skills = {
  title: 'Main skills',
  contents: [
    {
      title: 'Backend, microservices',
    },
    {
      title: 'P2P communication, Core Blockchain development',
    },
    {
      title: 'Golang, Python, JavaScript, CSS, HTML, React, Shell Script',
    },
    {
      title: 'Docker, Kubernetes, Go releaser, Travis CI, Github Actions',
    },
  ],
};

const experience = {
  title: 'Experience',
  contents: [
    {
      title: 'Go Developer',
      content: '@ Skycoin',
      date: '*current',
    },
    {
      title: 'Software Developer',
      content: '@ Chrisel Technolab',
      date: '2019-2021',
    },
    {
      title: 'Jr. Software Developer',
      content: '@ Dquip',
      date: '2018-2018',
    },
  ],
};

const languages = {
  title: 'Languages',
  contents: [
    {
      title: 'en-US English',
    },
  ],
};

const hobbies = {
  title: 'Also busy with',
  contents: [
    {
      title: 'Games',
    },
    {
      title: 'Trying different cuisines',
    },
  ],
};

AboutLayout.propTypes = { aboutInfo: PropTypes.node.isRequired };

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

        <div className="pt-4 inline-flex">
          <a href="https://www.linkedin.com/in/ersonpereira/" title="Linkedin" target="_blank" rel="noreferrer" className="pr-4">
            <svg aria-hidden="true" className="fill-secondary-color dark:fill-primary-color" height="24" version="1.1" viewBox="0 0 24 24" width="24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a href="https://github.com/ersonp" title="GitHub" target="_blank" rel="noreferrer" className="pr-4">
            <svg aria-hidden="true" className="fill-secondary-color dark:fill-primary-color" height="24" version="1.1" viewBox="0 0 16 16" width="24">
              <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          <div>
            Download my&nbsp;&nbsp;

            <a href={`${process.env.PUBLIC_URL}/Erson_Pereira.pdf`} download="Erson_Pereira_Software_Dev" target="_blank" rel="noreferrer">
              <button type="button" className="bg-secondary-color text-primary-color py-0.5 px-4 rounded-full items-center">
                <div className="flex flex-grow">
                  CV&nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="fill-current mt-0.5" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                  </svg>
                </div>
              </button>
            </a>
          </div>
        </div>

        <div className="py-4">
          <div className="w-full border-t border-secondary-color dark:border-primary-color" />
        </div>

        <AboutLayout aboutInfo={skills} />

        <AboutLayout aboutInfo={experience} />

        <AboutLayout aboutInfo={hobbies} />

        <AboutLayout aboutInfo={languages} />

      </div>
    </MainLayout>
  );
}
