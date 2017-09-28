import React from 'react';
import Header from './Header.jsx';

class About extends React.Component {
  constructor() {
    super();

    this.state = {
      title: 'About Me',
      description: 'Hello, my name is Bruce and I am a Full Stack Developer specializing in JavaScript.'
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
              <h2 className="text-size-40 margin-bottom-30">✧  Professional</h2>
              <h4 className="text-size-20">Strong</h4>
              <p>-JavaScript (ES6), React, Node, Express, MySQL, Sequelize, MongoDB, Mongoose, HTML, CSS, jQuery,  Git, Github, Webpack, Heroku, Npm, Underscore, TDD, Mocha, Chai, Agile Development</p><br />
              <h4 className="text-size-20">Experienced</h4>
                <p>-AngularJS, AWS (S3, Route 53), Grunt, Bootstrap, Photoshop (CS6), Illustrator (CS6)</p><br />
              <h2 className="text-size-40 margin-bottom-30">✧  Personal</h2>
              <p>
                -When I’m not spending time with my wife and daughter, I enjoy traveling, photography (19k+ Instagram followers), trivia, board/card games, yoga, backpacking as well as following sports like auto racing and high altitude mountaineering.
              </p>
            </div>
          </div>
        </article>
      </main>
    );
  };
};

export default About;