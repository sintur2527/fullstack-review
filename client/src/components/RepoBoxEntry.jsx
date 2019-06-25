import React, { Component } from 'react';

export default class RepoBoxEntry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          {this.props.owner}
          <a href={this.props.url} target="_blank">
            {this.props.name}
          </a>
          <span className="badge badge-primary badge-pill">
            {this.props.forks}
          </span>
        </li>
      </div>
    );
  }
}
