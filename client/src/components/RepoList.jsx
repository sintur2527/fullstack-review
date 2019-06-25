import React from 'react';

const RepoList = props => (
  <div className="col-md-7">
    <h4> Database </h4>
    <p>There are {props.repos.length} repos.</p>
    <p>There are ______ users.</p>
  </div>
);

export default RepoList;
