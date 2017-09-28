import React from 'react';
import Loader from 'react-loader';
import Axios from 'axios';
import Photo from './Photo.jsx';
import Header from './Header.jsx';

class Gallery extends React.Component {
  constructor() {
    super();

    this.state = {
      loaded: false,
      photos: [],
      title: 'Photo Gallery',
      description: 'Hello, thank you for viewing my photography.  Click on any photo below and it will link you directly to my Instagram profile.'
    };
  };

  componentDidMount() {
    let photoData = [];

    Axios.get('/api/photos/')
      .then(response => {
        photoData = response.data.map(imageData => {
          return (
            <Photo
              link={imageData.link}
              text={imageData.caption.text}
              url={imageData.images.standard_resolution.url}
              key={imageData.caption.id}
            />
          );
        });
      })
      .then(() => {
        this.setState({loaded: true, photos: photoData});
      })
      .catch(err => {
        throw err;
      });
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
              <div className="margin">
                <Loader loaded={this.state.loaded}>
                  {this.state.photos}
                </Loader>
              </div>
            </div>
          </div>
          <div>
            <a target="_blank" className="button center text-size-12" href="https://www.instagram.com/brucegraham/">
              Click Here For More of My Instagram Photos
            </a>
          </div>
        </article>
      </main>
    );
  };
};

export default Gallery;