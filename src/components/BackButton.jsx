import React, { Component } from 'react'
import Back from '../images/back.png'

export class BackButton extends Component {
    render() {
        return (
            <div  
                className='back-button'
                onClick={this.props.back}>
              <img src={Back}/>
            </div>
        )
    }
}

export default BackButton
