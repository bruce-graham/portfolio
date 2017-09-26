import React from 'react';

const Landing = () => {
  return (
    <main role="main">
      <header>
        <div className="carousel-default owl-carousel carousel-main carousel-nav-white background-dark text-center">
          <div className="item">
            <div className="s-12">
              <img src="img/background_sunrise.jpg" alt="" />
              <div className="carousel-content">
                <div className="content-center-vertical line">
                  <div className="margin-top-bottom-80">
                    <h1 className="text-black margin-bottom-30 text-size-60 text-m-size-30 text-line-height-1">
                      Full Stack Developer
                    </h1>
                    <div className="s-12 m-10 l-8 center">
                      <p className="text-black text-size-14 margin-bottom-40">
                        Concord, California
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
};

export default Landing;