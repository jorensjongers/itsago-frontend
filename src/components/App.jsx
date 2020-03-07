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

  setUploading = (state) => {
    this.setState({uploading: state});
  }

  render() {
    const content = () => {
        if (this.state.uploading) {
          return <Loader type='Grid' />;
        } else {
          return <CameraField txt='Upload image' onUpload={this.setUploading}/>;
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