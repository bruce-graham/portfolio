import React from 'react';

class Contact extends React.Component {
  constructor() {
    super();
  };

  componentDidMount() {
      let s = "=b!dmbtt>#cvuupo!cvuupo.ebsl.tusplf!ufyu.tj{f.23#!isfg>#nbjmup;csvdfhsbibn22Ahnbjm/dpn#?Fnbjm=0b?";
      let m = "";

      for (let i = 0; i < s.length; i++) {
        m += String.fromCharCode(s.charCodeAt(i) - 1);
      }
      document.getElementById('method1').innerHTML = (m);
  };

  render() {
    return (
      <article>
        <header className="section background-dark">
          <div className="line">
            <h1 className="text-white margin-top-bottom-40 text-size-60 text-line-height-1">
              Contact
            </h1>
            <p className="margin-bottom-0 text-size-16">
              Please find me at any of the links below.
            </p>
          </div>
        </header>
        <div className="section background-white">
          <div className="line margin-bottom-60">
            <div className="margin">

              <div className="s-12 m-12 l-4 margin-m-bottom">
                <div className="padding-2x block-bordered border-radius">
                  <div className="float-left">
                    <i className="icon-sli-envelope icon2x text-primary"></i>
                  </div>
                  <div className="margin-left-70 margin-s-left-0 margin-bottom">
                    <span id="method1">m<b>@</b>e@d<b>no</b>oma<b>.com</b>in.com</span>
                  </div>
                </div>
              </div>

              <div className="s-12 m-12 l-4 margin-m-bottom">
                <div className="padding-2x block-bordered border-radius">
                  <div className="float-left">
                    <i className="icon-sli-social-github icon2x text-primary"></i>
                  </div>
                <div className="margin-left-70 margin-s-left-0 margin-bottom">
                  <a target="_blank" className="button button-dark-stroke text-size-12" href="https://github.com/bruce-graham">
                    GitHub
                  </a>
                </div>
                </div>
              </div>

              <div className="s-12 m-12 l-4 margin-m-bottom">
                <div className="padding-2x block-bordered border-radius">
                  <div className="float-left">
                    <i className="icon-sli-social-linkedin icon2x text-primary"></i>
                  </div>
                  <div className="margin-left-70 margin-s-left-0 margin-bottom">
                    <a target="_blank" className="button button-dark-stroke text-size-12" href="https://www.linkedin.com/in/brucegraham11">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div className="s-12 m-12 l-4 margin-m-bottom">
                <div className="padding-2x block-bordered border-radius">
                  <div className="float-left">
                    <i className="icon-sli-user-following icon2x text-primary"></i>
                  </div>
                  <div className="margin-left-70 margin-s-left-0 margin-bottom">
                    <a target="_blank" className="button button-dark-stroke text-size-12" href="https://angel.co/brucegraham">
                      AngelList
                    </a>
                  </div>
                </div>
              </div>

              <div className="s-12 m-12 l-4 margin-m-bottom">
                <div className="padding-2x block-bordered border-radius">
                  <div className="float-left">
                    <i className="icon-sli-social-twitter icon2x text-primary"></i>
                  </div>
                  <div className="margin-left-70 margin-s-left-0 margin-bottom">
                    <a target="_blank" className="button button-dark-stroke text-size-12" href="https://twitter.com/brucegraham11">
                      Twitter
                    </a>
                  </div>
                </div>
              </div>

              <div className="s-12 m-12 l-4 margin-m-bottom">
                <div className="padding-2x block-bordered border-radius">
                  <div className="float-left">
                    <i className="icon-sli-social-instagram icon2x text-primary"></i>
                  </div>
                <div className="margin-left-70 margin-s-left-0 margin-bottom">
                  <a target="_blank" className="button button-dark-stroke text-size-12" href="https://www.instagram.com/brucegraham/">
                    Instagram
                  </a>
                </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </article>
    );
  }
};

export default Contact;