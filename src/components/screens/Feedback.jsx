import React, { Component } from 'react'
import BackButton from '../BackButton.jsx'

export class Feedback extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sent: false,
            feedback: ''
        }
    }

    sendFeedback = () => {
        fetch(window.API_URL + '/feedback', {
            method: 'POST',
            body: 'feedback=' + this.state.feedback,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
        this.setState({sent: true});
    }

    handleChange = (event) => {
        this.setState({feedback: event.target.value});
    }


    render() {
        return (
            <div className='feedback-screen'>
                <BackButton back={() => this.props.changeState('response')}/>
                <h1> We're sorry you've had a bad experience. </h1>
                <h2> Please tell us what's wrong.</h2>
                {this.state.sent 
                    ? <h3> Thank you! </h3>
                    : <textarea value={this.state.feedback} onChange={this.handleChange}/>}
                {this.state.sent
                    ? <button onClick={() => this.props.changeState('input')}> Check another item </button>
                    : <button onClick={() => this.sendFeedback()}> Send </button>}
            </div>
        )
    }
}

export default Feedback
