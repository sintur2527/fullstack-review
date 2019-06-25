import React, { Component } from 'react';
import RepoBoxEntry from './RepoBoxEntry.jsx';

export default class RepoBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-md-5">
        <h4>Top Repos:</h4>
        <ol>
          {this.props.repos.map(repo => (
            <RepoBoxEntry key={repo.id} name={repo.name} url={repo.html_url} />
          ))}
        </ol>
      </div>
    );
  }
}
