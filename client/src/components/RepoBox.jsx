import React, { Component } from 'react';
import RepoBoxEntry from './RepoBoxEntry.jsx';

export default class RepoBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-md-5">
        <h4>Top 25 Repos:</h4>
        <p>Sorted by number of forks</p>
        <ol className="list-group">
          {this.props.repos.map(repo => (
            <RepoBoxEntry
              key={repo.id}
              name={repo.name}
              url={repo.url}
              forks={repo.forks}
              owner={repo.owner}
            />
          ))}
        </ol>
      </div>
    );
  }
}
