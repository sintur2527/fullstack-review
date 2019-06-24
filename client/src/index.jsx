import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
    };
  }

  componentDidMount() {
    Axios.get('/repos').then(({ data }) => {
      this.setState({
        repos: data,
      });
    });
  }

  search(term) {
    console.log(`${term} was searched`);
    Axios.post('/repos');
  }

  render() {
    console.log('this.state.repos', this.state.repos);
    return (
      <div>
        <h1>Github Fetcher</h1>
        <RepoList repos={this.state.repos} />
        <Search onSearch={this.search.bind(this)} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
