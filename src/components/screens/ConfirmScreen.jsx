import React, { Component } from 'react'

export class ConfirmScreen extends Component {

    render() {
        console.log(this.props.item);
        return (
            <div className='confirm'>
                <h1> Your item: </h1>
                <img className='picture' src={this.props.path} />
                <h2 className='placeholder'> {this.props.item} </h2> 
                <button onClick={() => this.props.changeState('response')}> Continue </button>
                <h6> Not your item? </h6>
                <h6 className='link' onClick={() => this.props.changeState('input')}> Try again </h6>

            </div>
        )
    }
}

export default ConfirmScreen
