import React, { Component } from 'react'

export class TermsConditionsScreen extends Component {
    render() {
        return (
            <div className='terms'>
                <h1>Terms and conditions</h1>
                <ul>
                    <li> These terms and conditions are not finalized.</li>
                    <li> This web application powered by Itsago, gives advice on the hand baggage conditions following the policies of Brussels Airport Company. It advises on which items are allowed through the security check of our airport and which items are not allowed through. </li>
                    <li> We are not responsible if belongings are confiscated at security checks. </li>
                    <li> Depending on your airline and flight ticket, there may be differences with conditions of Brussels Airport Company concerning the permission of items in your hand baggage you want to take with you on the plane. Therefore check the conditions of your airline and flight ticket. </li>
                    <li> Anything that has monetary value, should be either with you or in your hand baggage. If you lose money-related items in your hand baggage, airport are not obligated to compensate you. </li>
                    <li> Google Cloud Vision API is used for image detection. </li>
                </ul>
                <button onClick={() => this.props.changeState('welcome')}> Back </button>
            </div>
        )
    }
}

export default TermsConditionsScreen
