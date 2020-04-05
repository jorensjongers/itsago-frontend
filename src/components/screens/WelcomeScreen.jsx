import React, { Component } from 'react'

export class WelcomeScreen extends Component {
    render() {
        return (
            <div className='screen'>
                <img className='bac-logo' src='./src/images/bac_logo.png'/>
                <img className='language-icon' src='./src/images/language_icon.png'/>
                <h1 className='product-name'> Brussels Airport Hand Baggage Check </h1>
                <h2> Developed by </h2>
                <img className='itsago' src='./src/images/itsago.png'/>
                <h6> By clicking continue you agree to our </h6>
                <button onClick={() => this.props.changeState('input')}> Continue </button>
                <h6 className='link' onClick={() => this.props.changeState('terms')}> Terms and Conditions </h6>
            </div>
        )
    }
}

export default WelcomeScreen

