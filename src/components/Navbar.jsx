import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header role="banner" className="position-absolute">
      <nav className="background-transparent background-transparent-hightlight full-width sticky">
        <div className="s-12 l-2">
          <Link to="/" className="logo">
            <img className="logo-white" src="img/LogoWhite.png" alt="" />
            <img className="logo-dark" src="img/LogoDark.png" alt="" />
          </Link>
        </div>
        <div className="top-nav s-12 l-10">
          <p className="nav-text"></p>
          <ul className="right chevron">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;