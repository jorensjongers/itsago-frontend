import React from 'react'
import Loader from 'react-loader-spinner'
import CameraField from './CameraField.jsx';

class InputScreen extends React.Component {
  render() {
    return <CameraScreen/>
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

export default InputScreen;