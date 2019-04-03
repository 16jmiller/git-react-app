import React, { Component } from 'react';

import axios from 'axios';

class GitForm extends Component {
  state = {
    username: '',
    reponame: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://api.github.com/repos/${this.state.username}/${this.state.reponame}/commits`).then(resp => {
      const data = resp.data;
      var index;
      for (index = 0; index < data.length; ++index) {
        this.props.addCommit(data[index]);
      }
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="username"
          value={this.state.username}
          onChange={this.handleChange}
          placeholder="GitHub user name"
          required
        />
        <input
          type="text"
          id="reponame"
          value={this.state.reponame}
          onChange={this.handleChange}
          placeholder="GitHub repo name"
          required
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default GitForm;
