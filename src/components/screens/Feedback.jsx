import React, { Component } from 'react'
import BackButton from '../BackButton.jsx'
import Full from '../../images/star_full.png'
import Empty from '../../images/star_empty.png'

export class Feedback extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sent: false,
            feedback: '',
            nbStars: 0
        }
    }

    sendFeedback = () => {
        fetch(window.API_URL + '/feedback', {
            method: 'POST',
            body: `nb_stars=${this.state.nbStars}&feedback=${this.state.feedback}`,
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
        const full = []
        const empty = []

        for (let i=0; i<5; i++) {
            if (i < this.state.nbStars) {
                full.push(<img className='star' src={Full} onClick={() => this.setState({nbStars: i+1})}/>)
            } else {
                empty.push(<img className='star' src={Empty} onClick={() => this.setState({nbStars: i+1})}/>)
            }
        }

        return (
            <div className='feedback-screen'>
                <BackButton back={() => this.props.changeState('response')}/>
                <h1> We're happy to hear from you! </h1>
                <h2> Please rate your experience and leave your comments below.</h2>
                <div className='stars'> 
                        {full}
                        {empty}
                </div>
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
