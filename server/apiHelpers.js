const Axios = require('axios');
const circular = require('circular');
const config = require('./config.js');

module.exports = {
  getInstagramPhotos: callback => {
    const num_photos = 18;

    Axios.get('https://api.instagram.com/v1/users/' + config.userid + '/media/recent', {
      params: {
        access_token: config.token,
        count: num_photos
      }
    })
    .then(data => {
      let json = JSON.stringify(data, circular());
      let restoredObj = JSON.parse(json);

      callback(restoredObj.data.data);
    })
    .catch(err => {
      callback(err);
    });
  }
};