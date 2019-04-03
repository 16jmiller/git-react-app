import React, { Component } from 'react';
import './App.css';
import GitForm from './forms/GitForm';
import CommitSummary from './displays/CommitSummary';

class App extends Component {

  state = {
    commits: []
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
          <CommitSummary commits={this.state.commits} />
        </header>
      </div>
    );
  }
}

export default App;
