import React from 'react';
import Loader from 'react-loader-spinner'
import Button from './Button.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploading: false,
      images: []
      }; 
  }

  uploadImage = e => {
    this.setState({uploading: true});
    // code to upload image
  }

  render() {
    const content = () => {
        if (this.state.uploading) {
          return <Loader type='Grid' />;
        } else {
          return <Button txt='Upload image' action={this.uploadImage} />;
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