import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange(e) {
    this.setState({
      term: e.target.value,
    });
  }

  search() {
    this.props.onSearch(this.state.term).then(() => {
      this.props.handleSubmit();
    });
  }

  render() {
    return (
      <div>
        <h4>Add more repos!</h4>
        Enter a github username:{' '}
        <form className="form-inline">
          <input
            value={this.state.terms}
            onChange={this.onChange}
            className="form-control mb-2 mr-sm-2"
          />
          <button onClick={this.search} className="btn btn-dark mb-2">
            {' '}
            Add Repos{' '}
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
