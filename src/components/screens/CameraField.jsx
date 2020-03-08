import React from 'react'
import Camera from 'react-camera'
const API_URL = "http://localhost:5000";

class CameraField extends React.Component {
    render() {
        const style = {
            container: {
                width: 500,
                height: 500
            },
            preview: {
                position: 'relative',
            },
            captureContainer: {
                display: 'flex',
                position: 'absolute',
                justifyContent: 'flex-start',
                zIndex: 1,
                bottom: 0,
                width: '100'
            },
            captureButton: {
                backgroundColor: '#fff',
                borderRadius: '50%',
                height: 56,
                width: 56,
                color: '#000',
                margin: 20
            }
          }

        return (
          <div style={style.container}>
            <Camera
              style={style.preview}
              ref={(cam) => {
                this.camera = cam;
              }}
            >
              <div style={style.captureContainer} onClick={this.takePicture}>
                <div style={style.captureButton} />
              </div>
            </Camera>
          </div>
        );
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

    takePicture = () => {
        this.camera.capture()
        .then(picture => {this.uploadImage(picture)});
    }
};

export default CameraField;