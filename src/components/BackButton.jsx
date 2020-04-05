import React, { Component } from 'react'

export class BackButton extends Component {
    render() {
        return (
            <div  
                className='back-button'
                onClick={this.props.back}>
              <img src="/src/images/back.png"/>
            </div>
        )
    }
}

export default BackButton
