import React from 'react'
import Camera from 'react-camera'
const API_URL = "http://localhost:5000";

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

class CameraField extends React.Component {
    render() {
        return (
          <div className="container">
            <Camera className="preview" ref={(cam) => {this.camera = cam;}}/>
            <button onClick={this.takePicture}> Take picture </button>
          </div>
        );
    }

    takePicture = () => {
        this.camera.capture()
        .then(picture => {this.uploadImage(picture)});
    }

    uploadImage = (picture) => {
      this.props.onUpload(true);
      console.log(picture);
      const formData = new FormData();
      formData.append('file', picture, 'image.jpg');
      fetch(API_URL + "/upload_image", {
        method: 'POST',
        body: formData
      });
      this.props.onUpload(false);
  }
};


export default CameraScreen

