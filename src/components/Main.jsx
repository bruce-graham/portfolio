import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Gallery from './Gallery.jsx';
import Landing from './Landing.jsx';
import Portfolio from './Portfolio.jsx';
import Resume from './Resume.jsx';

const Main = () => {
  return (
    <main role="main">
      <Switch>


        <Route exact path='/' component={Landing} />
        <Redirect from='/home' to="/" />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/resume' component={Resume} />

      </Switch>
    </main>
  );
};

export default Main;