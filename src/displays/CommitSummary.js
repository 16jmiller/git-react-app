import React, { Component } from 'react';
import './CommitSummary.css';

class CommitSummary extends Component {

    showFilesChanged = (e) => {
        this.props.addFiles(e);
    }

    render() {
        if (this.props.commits === undefined || this.props.commits.length == 0) {
            return null
        } else {
            const commitList = this.props.commits.map(commit => {
                return (
                        <section className="sections" key={commit.sha}>
                                <img alt="avatar" style={{ width: '70px' }} src={commit.author.avatar_url} className="pic"/>
                                <div className="sectioninfo">
                                    <div className="info">
                                        {"Author: " + commit.author.login}
                                    </div>
                                    <div className="info">
                                        {"Message: " + commit.commit.message}
                                    </div>
                                    <div className="info">
                                        {"Date: " + commit.commit.committer.date}
                                    </div>
                                    <div id="chevron-arrow-down" value = {commit.url}onClick={() => this.showFilesChanged(commit.url)}></div>
                                </div>
                        </section>
                )
            })
            return(
                <div className="commit-list">
                    { commitList}
                </div>
            )
        }
    }
}

export default CommitSummary;
