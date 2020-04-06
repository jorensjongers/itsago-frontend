import React from 'react'
import BackButton from '../BackButton.jsx'


class InputScreen extends React.Component {
  render() {
    return (
      <div className='input'>
        <BackButton back={() => this.props.changeState('welcome')}/>
          <h1> Find out whether or not your item is allowed! </h1>
          <div className='home-choice'>
            <button onClick={() => this.props.changeState('camera')}> 
                <img className='cam-button' src="/src/images/camera_icon.png" alt=""/>
                Scan
            </button>
            <button onClick={() => this.props.changeState('manual')}> 
                <img className='cam-button' src="/src/images/magnifying_glass.png" alt=""/>
                Search
            </button>
          </div>
          <h6 className='link' onClick={() => this.props.changeState('instructions')}> Instructions </h6>
      </div>
    )
  }
}

export default InputScreen

