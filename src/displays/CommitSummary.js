import React, { Component } from 'react';
import Commit from './Commit';

class CommitSummary extends Component {

    render() {
        if (this.props.commits === undefined || this.props.commits.length === 0) {
            return null
        } else {
            const commitList = this.props.commits.map(commit => {
                return (
                    <Commit commit={commit} key={Math.random()}/>
                )
            })
            return(
                <div className="commit-list" >
                    {commitList}
                </div>
            )
        }
    }
}

export default CommitSummary;
