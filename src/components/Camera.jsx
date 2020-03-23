import React from 'react'
import Camera from 'react-camera'
const API_URL = "http://localhost:5000";


class CameraScreen extends React.Component {


    render() {
        return (
          <CameraField 
            setPath={(path) => this.props.setPath(path)}
            setItem={(item) => this.props.setItem(item)}
            continue={this.props.continue}
          />
        )
    }
}

class CameraField extends React.Component {

    render() {
        return (
          <div>
            <div className='container'>
              <Camera className="preview" ref={(cam) => {this.camera = cam;}}/>
            </div>
            <button onClick={this.takePicture}> Take picture </button>
          </div>
        );
    }

    takePicture = () => {
        this.camera.capture()
        .then(blob => 
          { 
            this.props.setPath(URL.createObjectURL(blob));
            this.uploadImage(blob);
          }
        );
    }

    uploadImage = (picture) => {
      /*
      console.log(picture);
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
};


export default CameraScreen

