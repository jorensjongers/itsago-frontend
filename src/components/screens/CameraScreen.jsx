import React from 'react'
import Loader from 'react-loader-spinner'
import CameraField from './CameraField.jsx';

class CameraScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            uploading: false
        }
    }
    setUploading = (state) => {
        this.setState({uploading: state});
    }

    render() {
        const content = () => {
            if (this.state.uploading) {
              return <Loader type='Grid' />;
            } else {
              return <CameraField txt='Upload image' onUpload={this.setUploading}/>;
            };
          }
    
        return (
          <div>
            {content()}
          </div>
        )
    }
}

export default CameraScreen;