import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Main from './Main.jsx';

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;