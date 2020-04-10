import React from 'react'
import Camera, { FACING_MODES } from 'react-html5-camera-photo';
import BackButton from './BackButton.jsx'
import 'react-html5-camera-photo/build/css/index.css';
const API_URL = "https://itsago.app/api";


class CameraScreen extends React.Component {

    takePicture = (dataUri)  => {
      this.props.setPath(dataUri)
      fetch(dataUri)
        .then(x => x.blob())
        .then((picture) => {
          this.uploadImage(picture)
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
        this.props.setItems(data);
        this.props.changeState('confirm');
      });
    }

    render() {
        return (
          <div>
            <BackButton back={() => this.props.changeState('input')}/>
            <div className='camera'>
              <Camera
                onTakePhoto = {(dataUri) => {this.takePicture(dataUri);}}
                idealFacingMode = {FACING_MODES.ENVIRONMENT}
                isImageMirror = {false}
              />
            </div>
          </div>
        )
    }
}


export default CameraScreen

