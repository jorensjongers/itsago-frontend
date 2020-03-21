import React, { Component } from 'react'

export class WelcomeScreen extends Component {
    render() {
        return (
            <div className='screen'>
                <img className='bac-logo' src='./images/bac_logo.png'/>
                <h1>Welcome to Brussels Airport Luggage Check</h1>
                <img className='luggage' src='./images/luggage.png'/>
                <h6 onClick={() => this.props.changeState('terms')}>By clicking continue you agree to our terms and conditions </h6>
                <button onClick={() => this.props.changeState('start')}> Continue </button>
            </div>
        )
    }
}

export default WelcomeScreen

