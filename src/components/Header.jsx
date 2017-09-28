import React from 'react';

const Header = ({ title, description }) => {
  return (
    <header className="section background-dark">
      <div className="line">
        <h1 className="text-white margin-top-bottom-40 text-size-60 text-line-height-1">
          { title }
        </h1>
        <p className="margin-bottom-0 text-size-16">
          { description }
        </p>
      </div>
    </header>
  );
};

export default Header;