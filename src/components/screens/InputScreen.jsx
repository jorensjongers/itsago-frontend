import React from 'react'
import CameraScreen from '../Camera.jsx'
import ManualEntry from '../SearchBar.jsx'
import BackButton from '../BackButton.jsx'

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
            <BackButton back={() => this.props.changeState('welcome')}/>
                <h1 className='explanation'>
                    The hand luggage checker will reassure whether 
                    the items you wan to bring are allowed in your carry-on luggage.<br/>
                    The end of worry at the security checkpoint! <br/>
                    <br/>
                    The advice is not binding
                </h1>
                <button onClick={() => this.setState({inputType: 'camera'})}> 
                    <img className='cam-button' src="/src/images/camera_icon.png" alt=""/>
                    Scan my item! </button>
                <h6> Rather not use the camera? </h6>
                <h6 className='link' onClick={() => this.setState({inputType: 'manual'})}> Insert item manually </h6>
          </div>
        )
      case 'camera':
        return <CameraScreen 
                  continue={() => this.props.changeState('confirm')}
                  setPath={(path) => this.props.setPath(path)}
                  setItems={(items) => this.props.setItems(items)} 
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

