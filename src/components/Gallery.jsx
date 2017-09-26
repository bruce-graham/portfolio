import React from 'react';
import Axios from 'axios';
import Loading from'./Loading.jsx';

class Gallery extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      photos: []
    }
  };

  componentDidMount() {
    Axios.get('/api/photos/')
      .then(response => {
        let photoData = response.data.map(imageData => {
          return (
            <div class="s-12 m-6 l-4">
              <div class="image-with-hover-overlay image-hover-zoom margin-bottom">
                <a target="_blank" href={ imageData.link }>
                <div class="image-hover-overlay background-primary">
                  <div class="image-hover-overlay-content text-center padding-2x">
                    <p>Quote: { imageData.caption.text }</p>
                  </div>
                </div>
                <img src={ imageData.images.standard_resolution.url } alt="" title="Photography" />

              </a>

              </div>
            </div>
            );
        });
        this.setState({loading: false, photos: photoData});
      })
      .catch(err => {
        throw err;
      });
  };

  render() {
    if (this.props.loading) {
      return <Loading />
    }
    return (
      <article>
        <header className="section background-dark">
          <div className="line">
            <h1 className="text-white margin-top-bottom-40 text-size-60 text-line-height-1">
              Photo Gallery
            </h1>
            <p className="margin-bottom-0 text-size-16">
              Hello, thank you for viewing my photography.<br />
              Click on any photo below and it will link you directly to my Instagram profile.
            </p>
          </div>
        </header>
        <div className="section background-white">
          <div className="line">
            <div className="margin">
              {this.state.photos}
            </div>
          </div>
        </div>
        <div>
          <a target="_blank" className="button center text-size-12" href="https://www.instagram.com/brucegraham/">
            Click Here For More of My Instagram Photos
          </a>
        </div>
      </article>
    );
  };
};

export default Gallery;