import React from 'react';
import Header from './Header.jsx';

class Resume extends React.Component {
  constructor() {
    super();

    this.state = {
      title: 'Resume',
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
              <img src="img/resume.png" />
            </div>
          </div>
        </article>
      </main>
    );
  };
};

export default Resume;