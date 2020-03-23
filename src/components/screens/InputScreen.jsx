import React from 'react'
import CameraScreen from './../Camera.jsx'
import ManualEntry from './../SearchBar.jsx'

class InputScreen extends React.Component {
  constructor() {
    super();
    this.state = {inputType: ''};
  }

  render() {
    switch (this.state.inputType) {
      case '':
        return (
          <div>
            <div className='cam-button' onClick={() => this.setState({inputType: 'camera'})}>
              <img className='cam-button' src="./src/images/camera_icon.png"/>
              <h3 className='link'> Scan my item </h3>
            </div>
            <h6> Rather not use the camera? </h6>
            <h6 className='link' onClick={() => this.setState({inputType: 'manual'})}> Insert item manually </h6>
          </div>
        )
      case 'camera':
        return <CameraScreen 
                  continue={() => this.props.changeState('confirm')}
                  setPath={(path) => this.props.setPath(path)}
                  setItem={(str) => this.props.setItem(str)} 
               />
      case 'manual':
        return <ManualEntry 
                  continue={() => this.props.changeState('response')}
                  setItem={(str) => this.props.setItem(str)} 
               />
    }
  }
}

export default InputScreen

