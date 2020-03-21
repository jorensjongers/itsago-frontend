import React, { Component } from 'react'

export class TermsConditionsScreen extends Component {
    render() {
        return (
            <div>
                <h1>Terms and conditions</h1>
                <button onClick={() => this.props.changeState('welcome')}> Back </button>
            </div>
        )
    }
}

export default TermsConditionsScreen
