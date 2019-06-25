import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import Axios from 'axios';
import RepoBox from './components/RepoBox.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
    };
    this.updateRepos = this.updateRepos.bind(this);
  }

  updateRepos() {
    Axios.get('/repos')
      .then(({ data }) => {
        this.setState({
          repos: data,
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  componentDidMount() {
    this.updateRepos();
  }

  search(term) {
    console.log(`${term} was searched`);
    return Axios.post('/repos', {
      username: term,
    }).then(() => {
      this.setState();
    });
  }

  render() {
    return (
      <div>
        <h1>Github Fetcher</h1>
        <div className="row">
          <div className="col-md-8">
            <Search
              onSearch={this.search.bind(this)}
              handleSubmit={this.updateRepos}
            />
          </div>
          <div className="col-md-4">
            <RepoList repos={this.state.repos} />
          </div>
        </div>
        <div className="row">
          <RepoBox repos={this.state.repos} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
