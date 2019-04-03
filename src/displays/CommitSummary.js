import React from 'react';
import './CommitSummary.css';

const CommitSummary = ({commits}) => {
    if (commits === undefined || commits.length == 0) {
        return null
    } else {
        const commitList = commits.map(commit => {
            return (
                    <section class="sections">
                        <div className="commit" key={commit.sha}>
                            <img alt="avatar" style={{ width: '70px' }} src={commit.author.avatar_url} class="pic"/>
                            <p class="info">
                                {"Author: " + commit.author.login + "\n" + "Message: " + commit.commit.message}
                            </p>
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

export default CommitSummary;
