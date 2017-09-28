import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Gallery from './Gallery.jsx';
import Landing from './Landing.jsx';
import Portfolio from './Portfolio.jsx';
import Resume from './Resume.jsx';

const Routing = () => {
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/gallery' component={Gallery} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/resume' component={Resume} />
    </Switch>
  );
};

export default Routing;