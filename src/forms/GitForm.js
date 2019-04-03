import React, { Component } from 'react';

import axios from 'axios';

class GitForm extends Component {
  state = {
    username: '',
    reponame: '',
    data: []
  }

  handleRepoChange = (event) => {
    this.setState({
      reponame: event.target.value
    });
  }

  handleUserChange = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    axios.get(`https://api.github.com/repos/${this.state.username}/${this.state.reponame}`).then(resp => {
      const data = resp.data
      this.setState({
        data: data
      });
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <input
        type="text"
        value={this.state.username}
        onChange={this.handleUserChange}
        placeholder="GitHub user name"
        required
      />
      <input
        type="text"
        value={this.state.reponame}
        onChange={this.handleRepoChange}
        placeholder="GitHub repo name"
        required
      />
      <button type="submit">Submit</button>
    </form>
    )
  }
}

export default GitForm;
