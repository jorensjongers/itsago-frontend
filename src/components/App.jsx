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
    this.submitImage = this.submitImage.bind(this);
  }

  submitImage() {
    this.setState({uploading: true})
  }

  render() {
    const content = () => {
        if (this.state.uploading) {
          return <Loader type='Grid' />;
        } else {
          return <Button txt='Upload image' action={this.submitImage} />;
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