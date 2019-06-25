const request = require('request');

let getReposByUsername = (user, callback) => {
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
    callback(null, JSON.parse(body));
  });
};

module.exports.getReposByUsername = getReposByUsername;
