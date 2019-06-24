const request = require('request');

let getReposByUsername = (user, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${user}/repos`,
    headers: {
      'User-Agent': 'request',
      Authorization: `token ${process.env.TOKEN}`,
    },
  };

  request.get(options, (err, response, body) => {
    if (err) {
      return console.error('get failed: ', err);
    }
    // console.log('Get successful! Server responded with: ', JSON.parse(body));
    callback(null, JSON.parse(body));
  });
};

module.exports.getReposByUsername = getReposByUsername;
