import React from 'react'
import Loader from 'react-loader-spinner'
import CameraField from './CameraField.jsx';

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



class CameraScreen extends React.Component {
    constructor() {
        super();
        this.state = {uploading: false};
    }
    setUploading = (state) => {
        this.setState({uploading: state});
    }

    render() {
        const content = () => {
            if (this.state.uploading) {
              return <Loader type='Grid' />;
            } else {
              return <CameraField onUpload={this.setUploading}/>;
            };
          }
    
        return (content())
    }
}

class ManualEntry extends React.Component {
  render() {
    return (
      <div>
        <input type="text" className="input" placeholder="Search..." />
      </div>
    );
  }
}

export default InputScreen;