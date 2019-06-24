const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/fetcher', {
  useMongoClient: true,
});

let repoSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  description: String,
  url: String,
  forks: Number,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = data => {
  Repo.create(data);
};

let get = data => {
  Repo.find(data);
};

module.exports.save = save;
module.exports.get = get;
