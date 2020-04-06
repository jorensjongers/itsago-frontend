import React from 'react'
import Camera, { FACING_MODES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
const API_URL = "http://localhost:5000";


class CameraScreen extends React.Component {

    takePicture = (dataUri)  => {
      this.props.setPath(dataUri)
      fetch(dataUri)
        .then(x => x.blob())
        .then((picture) => {
          // TODO: remove continue and activate uploadimage
          //this.uploadImage(picture)
          this.props.continue();
        });
    }

    uploadImage = (picture) => {
      const formData = new FormData();
      formData.append("file", picture, "image.png");
      fetch(API_URL + "/upload_image", {
        method: 'POST',
        body: formData
      })
      .then((response) => response.json())
      .then((data) => {
        this.props.setItems(data)
        this.props.continue()
      });
    }

    render() {
        return (
          <Camera
            onTakePhoto = {(dataUri) => {this.takePicture(dataUri);}}
            idealFacingMode = {FACING_MODES.ENVIRONMENT}
          />
        )
    }
}


export default CameraScreen

