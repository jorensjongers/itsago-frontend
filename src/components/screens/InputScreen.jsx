import React from 'react'

class InputScreen extends React.Component {
  constructor() {
    super();
    //TODO set to empty string
    this.state = {inputType: 'manual'};
  }

  render() {
    switch (this.state.inputType) {
      case '':
        return (
          <div>
            <h1> How do you want to enter items? </h1>
            <button onClick={() => this.setState({inputType: 'camera'})}> Camera </button>
            <button onClick={() => this.setState({inputType: 'manual'})}> Manual entry </button>
          </div>
        )
      case 'camera':
        return <CameraScreen/>
      case 'manual':
        return <ManualEntry/>
    }
    
  }
}

export default InputScreen

