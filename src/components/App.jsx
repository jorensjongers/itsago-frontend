import React from 'react';
import Loader from 'react-loader-spinner'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploading: false,
      images: []
      }; 
  }

  submitImage() {
    alert('submitted');
  }

  render() {
    const content = () => {
        if (this.state.uploading) {
          return <Loader type='Grid' />;
        } else {
          return <button txt='Upload image' />;
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