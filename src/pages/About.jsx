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
      content: '@ Skycoin',
      date: '*current',
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
