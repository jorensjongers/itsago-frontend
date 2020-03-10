import React from 'react'
import Camera from 'react-camera'
const API_URL = "http://localhost:5000";

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

export default CameraField;