import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import Routing from './Routing.jsx';

class App extends React.Component {
  constructor() {
    super();
  };

  render() {
    return (
        <BrowserRouter>
          <div>
            <Navbar />
            <Routing />
            <Footer />
          </div>
        </BrowserRouter>
    );
  };
};

export default App;