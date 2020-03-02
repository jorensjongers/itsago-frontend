import React from 'react';
import Loader from 'react-loader-spinner'
import CameraField from './CameraField.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploading: false,
      images: []
      }; 
  }

  uploadImage = (blob) => {
    this.setState({uploading: true});
    console.log(blob);
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