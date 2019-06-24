import React, { Component } from 'react';

export default class RepoBoxEntry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <li>
          <a href={this.props.url}>{this.props.name}</a>
        </li>
      </div>
    );
  }
}
