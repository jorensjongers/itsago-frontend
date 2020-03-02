import React from 'react';
import Loader from 'react-loader-spinner'
import CameraField from './CameraField.jsx';

const API_URL = "http://localhost:5000"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploading: false,
      images: []
      }; 
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

  render() {
    const content = () => {
        if (this.state.uploading) {
          return <Loader type='Grid' />;
        } else {
          return <CameraField txt='Upload image' action={this.uploadImage} />;
        };
      }

    return (
      <div>
        {content()}
      </div>
    )
  }
}
export default App;