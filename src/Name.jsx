import React from 'react';
import './Name.css';

export default function Name() {
  return (
    <div className="container w-full md:max-w-4xl mx-auto pb-20 pl-4 pr-4 max-w-md overflow-hidden">
      <div className="md:shrink-0">
        <h1 className="break-normal pt-6 pb-2 text-1xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl title-font">
          Hi there, I&apos;m
          <br />
          <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl pt-6 pb-2">
            Erson Pereira
          </div>
        </h1>
        <div className="font-sans">
          &nbsp;[air - sun pa - re - ra] &nbsp;&nbsp;
          <i className="font-serif"> noun </i>
        </div>
        <div className="py-4">
          <div className="w-full border-t border-black dark:border-white" />
        </div>
        Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of
        classical Latin literature from 45 BC, making it over 2000 years old.Richard McClintock,
        a Latin professor at Hampden - Sydney College in Virginia, looked up one of the more
        obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites
        of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
        from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum &quot;
        (The Extremes of Good and Evil) by Cicero, written in 45 BC.
        This book is a treatise on the theory of ethics, very popular during the Renaissance.
        The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;,
        comes from a line in section 1.10.32.
        <p>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for
          those interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et
          Malorum &quot; by Cicero are also reproduced in their exact original form,
          accompanied by English versions from the 1914 translation by H.Rackham.
        </p>
      </div>
    </div>
  );
}
