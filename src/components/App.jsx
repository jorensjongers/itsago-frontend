import React from 'react';

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
          return <Spinner />;
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