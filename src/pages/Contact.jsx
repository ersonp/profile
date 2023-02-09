import React from 'react';
import MainLayout from '../layout/MainLayout';

export default function Contact() {
  return (
    <MainLayout>
      <div className="container w-full md:max-w-7xl mx-auto pb-16 pl-4 pr-4 max-w-md overflow-hidden pt-16">
        <h1 className="break-normal pt-6 pb-2 text-1xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl title-font">
          Get in touch
          <br />
          <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl pt-6 pb-2">
            Say Hello!
          </div>
        </h1>
        <div className="py-4">
          <div className="w-full border-t border-secondary-color dark:border-primary-color" />
        </div>
        <div className="container w-full max-w-7xl mx-auto pt-1 overflow-hidden flex">
          <div className="flex-grow flex w-auto flex-col md:flex-row flex-wrap list-none mb-4">
            <div className="flex-grow pr-2 pb-2 break-normal w-22 ">
              If you&apos;d like to send me a message, I can be reached through various ways!
              <br />
              If you prefer email, send me a message directly at&nbsp;
              <code>ersonpereiracr7@gmail.com</code>
              .
            </div>
          </div>
        </div>
        Elsewhere, I can be found at the following:
        <br />

        <a href="https://www.linkedin.com/in/ersonpereira/" title="Linkedin" target="_blank" rel="noreferrer" className="pr-4 py-2 flex">
          <svg aria-hidden="true" className="fill-secondary-color dark:fill-primary-color" height="24" version="1.1" viewBox="0 0 24 24" width="24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          &nbsp;&nbsp;ersonpereira
        </a>
        <a href="https://github.com/ersonp" title="GitHub" target="_blank" rel="noreferrer" className="pr-4 py-2 flex">
          <svg aria-hidden="true" className="fill-secondary-color dark:fill-primary-color" height="24" version="1.1" viewBox="0 0 16 16" width="24">
            <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          &nbsp;&nbsp;ersonp
        </a>
        <a href="https://t.me/ersonp" title="Telegram" target="_blank" rel="noreferrer" className="pr-4 py-2 flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-secondary-color dark:fill-primary-color" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
          </svg>
          &nbsp;&nbsp;ersonp
        </a>
      </div>
    </MainLayout>
  );
}
