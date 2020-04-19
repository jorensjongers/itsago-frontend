import React from 'react'
import BackButton from '../BackButton.jsx'
import CameraIcon from '../../images/camera_icon.png'
import MagnifyingGlass from '../../images/magnifying_glass.png'


class InputScreen extends React.Component {
  render() {
    return (
      <div className='input'>
        <BackButton back={() => this.props.changeState('welcome')}/>
          <h1> Find out whether or not your item is allowed! </h1>
          <h2> Scan your item with the camera or search manually.</h2>
          <div className='home-choice'>
            <button onClick={() => this.props.changeState('camera')}> 
                <img className='cam-button' src={CameraIcon}/>
                Camera
            </button>
            <button onClick={() => this.props.changeState('manual')}> 
                <img className='cam-button' src={MagnifyingGlass} alt=""/>
                Search
            </button>
          </div>
          <h6 className='link' onClick={() => this.props.changeState('instructions')}> Instructions </h6>
      </div>
    )
  }
}

export default InputScreen

