import React from 'react';
import Header from './Header.jsx';

class Portfolio extends React.Component {
  constructor() {
    super();

    this.state = {
      title: 'Portfolio',
      description: 'Full Stack Developer'
    };
  };

  render() {
    return (
      <main role="main">
        <article>
          <Header
            title={this.state.title}
            description={this.state.description}
          />
          <div className="section background-white">
            <div className="line">
              <div>
                <a href="http://neighborly-app.herokuapp.com/" target="_blank">
                  <img className="hover border" src="img/neighborly.png" />
                </a>
                <a href="http://neighborly-app.herokuapp.com/" target="_blank" className="hover">
                  neighborly-app.herokuapp.com
                </a>
                <p className="par">
                  Neighborly is a helpful resource allowing users to view and share data on specific neighborhoods in the city of their choosing.<br />
                  ✧ Formed a responsive UI with React allowing users to efficiently access relevant data across device sizes.<br />
                  ✧ Implemented unit tests utilizing Mocha and Chai testing frameworks to speed up development.<br />
                  ✧ Incorporated Google Places API which allowed users to view location-specific photography.<br />
                </p>
                <hr />
              </div>
            </div>
            <div className="line">
              <div>
                <a href="https://metis-planner.herokuapp.com" target="_blank">
                  <img className="hover border" src="img/metis.png" />
                </a>
                <a href="https://metis-planner.herokuapp.com" target="_blank" className="hover">
                  metis-planner.herokuapp.com
                </a>
                <p className="par">
                  Metis is a custom schedule maker with full Google Calendar integration.<br />
                  ✧ Architected an intuitive UI with AngularJS, HTML and Responsee for a seamless experience across device sizes.<br />
                  ✧ Engineered RESTful API using NodeJS and Express for scalability and maintainability.<br />
                  ✧ Integrated Google Calendar’s API allowing users to easily interface with their personal calendars.<br />
                </p>
                <hr />
              </div>
            </div>
            <div className="line">
              <div>
                <a href="https://sandpiperanalytics.herokuapp.com" target="_blank">
                  <img className="hover border" src="img/sandpiper.png" />
                </a>
                <a href="https://sandpiperanalytics.herokuapp.com" target="_blank" className="hover">
                  sandpiperanalytics.herokuapp.com
                </a>
                <p className="par">
                  Sandpiper is a traffic analytics app that tracks button/link clicks.<br />
                  ✧ Visualized our analytics data with Plotly.js for a dynamic user experience.<br />
                  ✧ Empowered team as Product Owner to deliver project under time and beyond scope.<br />
                  ✧ Designed document-based schemas using MongoDB and Mongoose for flexibility in data modeling.<br />
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>
    );
  }
};

export default Portfolio;