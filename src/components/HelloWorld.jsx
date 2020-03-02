import React from 'react';

class HelloWorld extends React.Component {
  constructor() {
    this.state = {image: {}}
    
  }

  submitImage = () => {
    //code to submit image to backend.
  }
  render() {
    return (
    <div>
      <h1>Upload picture here</h1>
      <button onClick={submitImage}> Submit picture </button>
    </div>
    );
  }
}
export default HelloWorld;