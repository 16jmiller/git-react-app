import React, { Component } from 'react';
import './Commit.css';
import FileSummary from './FileSummary';
import axios from 'axios'

class Commit extends Component {
    state = {
        files: [],
        showFiles: false
    }

    showFilesChanged = (e) => {
        this.setState({
            showFiles: true
        })
        this.addFiles(e);
    }

    hideFilesChanged = (e) => {
        this.setState({
            showFiles: false
        })
        this.removeFiles();
    }

    removeFiles = (e) => {
        this.setState({
            files: []
        })
    }

    addFiles = (url) => {
        axios.get(`${url}`).then(resp => {
            const data = resp.data;
            var index;
            for (index = 0; index < data.files.length; ++index) {
                this.addFile(data.files[index]);
            }
        })
        .catch(error => {
            console.log(error.response)
          });
    }

  addFile = (file) => {
    file.id = Math.random();
    let files = [...this.state.files, file]
    this.setState({
      files: files
    })
  }

    render(){
        if(this.state.showFiles) {
            return (
                <div>
                    <section className="sections" key={this.props.commit.sha}>
                        <img alt="avatar" style={{ width: '70px' }} src={this.props.commit.author.avatar_url} className="pic"/>
                        <div className="sectioninfo">
                            <div className="info">
                                {"Author: " + this.props.commit.author.login}
                            </div>
                            <div className="info">
                                {"Message: " + this.props.commit.commit.message}
                            </div>
                            <div className="info">
                                {"Date: " + this.props.commit.commit.committer.date}
                            </div>
                            <div id="chevron-arrow-up" onClick={this.hideFilesChanged}></div>
                        </div>
                    </section>
                    <div className="fileSection">
                        <FileSummary files={this.state.files} />
                    </div>
                </div>
            )
        } else {
            return (
                <section className="sections" key={this.props.commit.sha}>
                    <img alt="avatar" style={{ width: '70px' }} src={this.props.commit.author.avatar_url} className="pic"/>
                    <div className="sectioninfo">
                        <div className="info">
                            {"Author: " + this.props.commit.author.login}
                        </div>
                        <div className="info">
                            {"Message: " + this.props.commit.commit.message}
                        </div>
                        <div className="info">
                            {"Date: " + this.props.commit.commit.committer.date}
                        </div>
                        <div id="chevron-arrow-down" value = {this.props.commit.url}onClick={() => this.showFilesChanged(this.props.commit.url)}></div>
                    </div>
                </section>
            )
        }
    }
}

export default Commit;
