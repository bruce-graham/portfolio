import React from 'react';

const Resume = () => {
  return (
    <article>
      <header className="section background-dark">
        <div className="line">
          <h1 className="text-white margin-top-bottom-40 text-size-60 text-line-height-1">
            Resume
          </h1>
          <p className="margin-bottom-0 text-size-16">
            Full Stack Developer
          </p>
        </div>
      </header>
      <div className="section background-white">
        <div className="line">
          <img src="img/resume.png" />
        </div>
      </div>
    </article>
  );
};

export default Resume;