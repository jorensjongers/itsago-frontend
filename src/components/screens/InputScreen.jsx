import React from 'react'
import CameraScreen from '../Camera.jsx'
import BackButton from '../BackButton.jsx'
import SearchBar from '../SearchBar.jsx';

class InputScreen extends React.Component {
  constructor() {
    super();
    this.state = {inputType: 'manual'}
  }

  render() {
    switch (this.state.inputType) {
      case '':
        return (
          <div className='input'>
            <BackButton back={() => this.props.changeState('welcome')}/>
              <h1> Find out whether or not your item is allowed! </h1>
              <div className='home-choice'>
                <button onClick={() => this.setState({inputType: 'camera'})}> 
                    <img className='cam-button' src="/src/images/camera_icon.png" alt=""/>
                    Scan
                </button>
                <button onClick={() => this.setState({inputType: 'manual'})}> 
                    <img className='cam-button' src="/src/images/magnifying_glass.png" alt=""/>
                    Search
                </button>
              </div>
              <h6 className='link' onClick={() => this.props.changeState('instructions')}> Instructions </h6>}
          </div>
        )
      case 'camera':
        return <CameraScreen 
                  continue={() => this.props.changeState('confirm')}
                  setPath={(path) => this.props.setPath(path)}
                  setItems={(items) => this.props.setItems(items)} 
               />
      case 'manual':
        return <SearchBar
                  continue={() => this.props.changeState('response')}
                  setItem={(str) => this.props.setItem(str)} 
               />
    }
  }
}

export default InputScreen

