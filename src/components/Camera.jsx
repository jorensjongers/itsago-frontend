import React from 'react'
import Camera from 'react-camera'
import ConfirmScreen from './screens/ConfirmScreen';
const API_URL = "http://localhost:5000";


class CameraScreen extends React.Component {
    constructor() {
        super();
        this.state = {
          confirm: false,
          picturePath: null
        };
    }

    render() {
        const content = () => {
            if (this.state.confirm) {
              return <ConfirmScreen path={this.state.picturePath}/>
            } else {
              return <CameraField 
                onUpload={() => this.setState({confirm: true})}
                setPath={(path) => this.setState({picturePath: path})}
                setItem={(item) => this.props.setItem(item)}
              />;
            };
          }
    
        return (content())
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
      this.props.setItem('Your face');
      this.props.onUpload();
  }
};


export default CameraScreen

