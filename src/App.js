import React, { Component } from 'react';
import './App.css';
import GitForm from './forms/GitForm';
import CommitSummary from './displays/CommitSummary';
import axios from 'axios';

class App extends Component {

  state = {
    commits: [],
    files: []
  }

  addFiles = (url) => {
        axios.get(`${url}`).then(resp => {
        const data = resp.data;
        var index;
        for (index = 0; index < data.files.length; ++index) {
        this.addFile(data.files[index]);
      }
    });
  }

  addFile = (file) => {
    file.id = Math.random();
    let files = [...this.state.files, file]
    this.setState({
      files: files
    })
  }

  addCommit = (commit) => {
    commit.id = Math.random();
    let commits = [...this.state.commits, commit]
    this.setState({
      commits: commits
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            This app allows a user to view git repositories at a glance.
          </p>
          <GitForm addCommit={this.addCommit} />
          <CommitSummary commits={this.state.commits} addFiles={this.addFiles} />
        </header>
      </div>
    );
  }
}

export default App;
