const express = require('express');
const bodyparser = require('body-parser');
const { save, get } = require('../database');
const { getReposByUsername } = require('../helpers/github.js');
let app = express();

app.use(bodyparser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function(req, res) {
  const { username } = req.body;
  if (!username) {
    res.sendStatus(400);
    return;
  }
  getReposByUsername(username, (err, data) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    }
    save(data)
      .then(() => {
        res.sendStatus(201);
      })
      .catch(err => {
        console.error(err);
        res.sendStatus(500);
      });
  });
});

app.get('/repos', function(req, res) {
  // This route should send back the top 25 repos
  get()
    .then(resp => {
      res.send(resp);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
});

let port = process.env.PORT || 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
