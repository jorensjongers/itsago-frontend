import React, { Component } from 'react'
import BackButton from '../BackButton.jsx'

export class Feedback extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sent: false,
            feedback = 'Please tell us whats wrong.'
        }
    }

    sendFeedback = () => {
        fetch(window.API_URL + '/feedback', {
            method: 'POST',
            body: 'feedback:' + this.state.feedback
        });
        this.setState({sent: true});
    }


    render() {
        return (
            <div className='feedback-screen'>
                <BackButton back={() => this.props.changeState('response')}/>
                <h1> We're sorry you've had a bad experience. </h1>
                {this.state.sent 
                    ? <textarea value={this.state.feedback}> Enter text here... </textarea> 
                    : <h3> Thank you! </h3>}
                <button onClick={() => this.sendFeedback()}> Send </button>
            </div>
        )
    }
}

export default Feedback
