import React from 'react'
import Loader from 'react-loader-spinner'
import CameraField from './CameraField.jsx';

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
  state = {
    query: '',
  }
 
  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

  render() {
    return (
      <form>
        <input 
          type="text" 
          className="input" 
          placeholder="Search..."
          ref={input => this.search = input} 
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </form>
    );
  }
}

export default InputScreen;