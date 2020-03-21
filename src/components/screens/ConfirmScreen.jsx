import React, { Component } from 'react'

export class ConfirmScreen extends Component {
    selectItem() {
        /* query backend for result */
        const result = 'Allowed';
        this.props.setResult(result);
        this.props.changeState('result');
    }
    render() {
        console.log(this.props.item);
        return (
            <div>
                <h1> Your item: </h1>
                <img src={this.props.path} />
                <h2 className='placeholder'> {this.props.item} </h2> 
                <button onClick={() => this.selectItem(this.props.item)}> Continue </button>
            </div>
        )
    }
}

export default ConfirmScreen
