import React, { Component } from 'react'

export class ResponseScreen extends Component {
    render() {
        return (
            <div>
                <h1 className={this.props.result}> {this.props.result} </h1>
            </div>
        )
    }
}

export default ResponseScreen