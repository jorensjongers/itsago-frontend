import React from 'react'
import Camera, { FACING_MODES } from 'react-html5-camera-photo';
import BackButton from './BackButton.jsx'
import 'react-html5-camera-photo/build/css/index.css';


class CameraScreen extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        error: false,
      }
    }

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
      fetch(window.API_URL + "/upload_image", {
        method: 'POST',
        body: formData
      })
      .then((response) => response.json())
      .then((data) => {
        this.props.setItems(data);
        this.props.changeState('confirm');
      });
    }

    handleCameraError = (error) => {
      this.setState({error: true});
    }

    render() {
        if (this.state.error) {
          return (
            <div>
              <BackButton back={() => this.props.changeState('input')}/>
              <h1> Oops... </h1>
              <h2> Seems like something went wrong, please check your camera permissions. </h2>
              <button onClick={() => this.props.changeState('input')}> Go back </button> 
            </div>
          )
        }
        return (
          <div>
            <BackButton back={() => this.props.changeState('input')}/>
            <div className='camera'>
              <Camera
                onTakePhoto = {(dataUri) => {this.takePicture(dataUri);}}
                idealFacingMode = {FACING_MODES.ENVIRONMENT}
                isImageMirror = {false}
                onCameraError = { (error) => {this.handleCameraError(error); } }
              />
            </div>
          </div>
        )
    }
}


export default CameraScreen

