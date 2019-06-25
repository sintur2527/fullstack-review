const mongoose = require('mongoose');

let url = process.env.MONGODB_URI || 'mongodb://localhost/fetcher';

mongoose.connect(url, {
  useMongoClient: true,
});

let repoSchema = mongoose.Schema({
  id: { type: String, unique: true },
  name: String,
  description: String,
  url: String,
  forks: Number,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = data => {
  return Promise.all(
    data.map(repo => {
      return Repo.findOneAndUpdate(
        { id: repo.id },
        {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          url: repo.html_url,
          forks: repo.forks,
        },
        { upsert: true }
      );
    })
  );
};

let get = () => {
  return Repo.find()
    .sort('-forks')
    .limit(25)
    .exec();
};

module.exports.save = save;
module.exports.get = get;
