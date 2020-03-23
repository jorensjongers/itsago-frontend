import React, { Component } from 'react'

export class WelcomeScreen extends Component {
    render() {
        return (
            <div className='screen'>
                <img className='bac-logo' src='./src/images/bac_logo.png'/>
                <h1>Welcome to Brussels Airport Luggage Check</h1>
                <img className='luggage' src='./src/images/luggage.png'/>
                <h6> By clicking continue you agree to our </h6>
                <h6 className='link' onClick={() => this.props.changeState('terms')}> Terms and Conditions </h6>
                <button onClick={() => this.props.changeState('start')}> Continue </button>
            </div>
        )
    }
}

export default WelcomeScreen

