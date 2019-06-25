import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import Axios from 'axios';
import RepoBox from './components/RepoBox.jsx';
import UserBox from './components/UserBox.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
    };
    this.updateRepos = this.updateRepos.bind(this);
  }

  componentDidMount() {
    this.updateRepos();
  }

  search(term) {
    console.log(`${term} was searched`);
    Axios.post('/repos', {
      username: term,
    })
      .then(() => {
        return this.updateRepos();
      })
      .catch(err => {
        console.error(err);
      });
  }

  updateRepos() {
    return Axios.get('/repos')
      .then(({ data }) => {
        this.setState({
          repos: data,
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Github Fetcher</h1>
        <div className="row">
          <Search
            onSearch={this.search.bind(this)}
            handleSubmit={this.updateRepos}
          />
          {/* <RepoList repos={this.state.repos} /> */}
        </div>
        <div className="row">
          <RepoBox repos={this.state.repos} />
          {/* <UserBox /> */}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
