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

let get = () => {
  return Repo.find()
    .limit(25)
    .sort({ forks: -1 });
};

module.exports.save = save;
module.exports.get = get;
