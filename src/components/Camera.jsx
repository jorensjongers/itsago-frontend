import React from 'react'
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
const API_URL = "http://localhost:5000";


class CameraScreen extends React.Component {

    takePicture = (dataUri)  => {
      const picture = fetch(dataUri)
      this.props.setPath(dataUri)
      this.uploadImage(picture)
      
    }

    uploadImage = (picture) => {
      /*
      const formData = new FormData();
      formData.append('file', picture, 'image.jpg');
      fetch(API_URL + "/upload_image", {
        method: 'POST',
        body: formData
      });
      */
      /* TODO: set this to backend result */
      this.props.setItem('Your face');
      this.props.continue();
    }

    render() {
        return (
          <Camera
            onTakePhoto = {(dataUri) => {this.takePicture(dataUri);}}
          />
        )
    }
}


export default CameraScreen

