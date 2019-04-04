import React, { Component } from 'react';
import File from './File'

class FileSummary extends Component {

    render() {
        const fileList = this.props.files.map(file => {
            return (
                <File file={file} key={Math.random()}/>
            )
        })
        return(
            <div className="file-list" >
                { fileList}
            </div>
        )
    }
}

export default FileSummary;
