const express = require('express');
const bodyparser = require('body-parser');
const db = require('../database');
const getRepos = require('../helpers/github.js').getReposByUsername;
let app = express();

app.use(bodyparser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function(req, res) {
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  // console.log('req.body', req.body);
  const { username } = req.body;
  getRepos(username, (err, data) => {
    if (err) {
      console.error(err);
    }
    db.save(data);
    res.send();
  });
});

app.get('/repos', function(req, res) {
  // This route should send back the top 25 repos
  db.get().then(resp => {
    res.send(resp);
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
