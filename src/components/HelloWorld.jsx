import React from 'react';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {image: ' '};
    
  }

  submitImage() {
    alert('submitted');
  }
  render() {
    return (
    <div>
      <h1>Upload picture here</h1>
      <button onClick={this.submitImage}> Submit picture </button>
    </div>
    );
  }
}
export default HelloWorld;