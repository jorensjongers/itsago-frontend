import React from 'react'
import Camera from 'react-camera'
import Button from './Button'
const API_URL = "http://localhost:5000";

class CameraField extends React.Component {
    render() {
        return (
            <Camera ref={(cam) => {this.camera = cam;}}>
                <Button txt='Take Picture' action={this.takePicture}/>
            </Camera>
    
        )
    }
    uploadImage = (picture) => {
        this.setState({uploading: true});
        console.log(picture);
        const formData = new FormData();
        formData.append('file', picture, 'image.jpg');
        fetch(API_URL + "/upload_image", {
          method: 'POST',
          body: formData
        });
        this.setState({uploading: false})
    }

    takePicture = () => {
        this.camera.capture()
        .then(picture => {this.uploadImage(picture)});
    }
}

export default CameraField;