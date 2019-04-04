import React, { Component } from 'react';
import './File.css';

class File extends Component {

    render() {
        return(
            <section className="file-sections" key={this.props.file.id}>
                <div className="file-sectioninfo">
                    <div className="file-info">
                        {"File name: " + this.props.file.filename}
                    </div>
                    <div className="file-info">
                        {"Additions: " + this.props.file.additions}
                    </div>
                    <div className="file-info">
                        {"Deletions: " + this.props.file.deletions}
                    </div>
                </div>
            </section>
        )
    }
}

export default File;