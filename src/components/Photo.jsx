import React from 'react';

const Photo = ({ link, text, url }) => {
  return (
    <div className="s-12 m-6 l-4">
      <div className="image-with-hover-overlay image-hover-zoom margin-bottom">
        <a target="_blank" href={ link }>
          <div className="image-hover-overlay background-primary">
            <div className="image-hover-overlay-content text-center padding-2x">
              <p>CLICK TO ENLARGE<br /><br /> Quote: { text }</p>
            </div>
          </div>
          <img src={ url } alt="" title="Photography" />
        </a>
      </div>
    </div>
  );
};

export default Photo;