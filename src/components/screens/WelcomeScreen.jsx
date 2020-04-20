import React, { Component } from 'react'
import BacLogo from '../../images/bac_logo.png'
import LanguageIcon from '../../images/language_icon.png'
import Itsago from '../../images/itsago.png'

export class WelcomeScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            agreed: false
        }
    }

    continueButton = () => {
        if (this.state.agreed) {
            return <button onClick={() => this.props.changeState('input')}> Continue </button>
        } else {
            return <button className='disabled'> Continue </button>
        }
    }

    handleChange = (event) => {
        this.setState({agreed: event.target.checked})
    } 
    render() {
        return (
            <div className='welcome'>
                <img className='bac-logo' src={BacLogo}/>
                <img className='language-icon' src={LanguageIcon}/>
                <h1> Brussels Airport Hand Baggage Check </h1>
                <h2> Developed by </h2>
                <img className='itsago' src={Itsago}/>
                <label className='terms' htmlFor="terms">
                    <input 
                        type="checkbox"
                        id='terms'
                        checked={this.state.agreed}
                        ref='agreed'
                        onChange={this.handleChange}/>
                    I agree to the 
                 </label>   
                <h6 className='link' onClick={() => this.props.changeState('terms')}> Terms and Conditions </h6>
                {this.continueButton()}
            </div>
        )
    }
}

export default WelcomeScreen

