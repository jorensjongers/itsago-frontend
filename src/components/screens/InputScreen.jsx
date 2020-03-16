import React from 'react'
import Loader from 'react-loader-spinner'
import CameraField from './CameraField.jsx';

class InputScreen extends React.Component {
  constructor() {
    super();
    //TODO set to empty string
    this.state = {inputType: 'manual'};
  }

  render() {
    switch (this.state.inputType) {
      case '':
        return (
          <div>
            <h1> How do you want to enter items? </h1>
            <button onClick={() => this.setState({inputType: 'camera'})}> Camera </button>
            <button onClick={() => this.setState({inputType: 'manual'})}> Manual entry </button>
          </div>
        )
      case 'camera':
        return <CameraScreen/>
      case 'manual':
        return <ManualEntry/>
    }
    
  }
}



class CameraScreen extends React.Component {
    constructor() {
        super();
        this.state = {uploading: false};
    }
    setUploading = (state) => {
        this.setState({uploading: state});
    }

    render() {
        const content = () => {
            if (this.state.uploading) {
              return <Loader type='Grid' />;
            } else {
              return <CameraField onUpload={this.setUploading}/>;
            };
          }
    
        return (content())
    }
}

class ManualEntry extends React.Component {
  state = {
    query: '',
    results: []
  }
 
  handleInputChange = () => {
    this.setState({query: this.search.value}, this.getInfo);
  }

  getInfo = () => {
    if (this.state.query && this.state.query.length > 0) {
      const url = 'http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=' + this.state.query + '&api_key=b264cc6a326b887db91199d794593d58&format=json';
      fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({results: data.results.artistmatches.artist.slice(0,7)}));
    } else {
      this.setState({results: []})
    }
  }

  render() {
    return (
      <form className='autocomplete'>
        <input 
          type="text" 
          className="input" 
          placeholder="Search..."
          ref={input => this.search = input} 
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    );
  }
}

class Suggestions extends React.Component {
  render() {
    const options = this.props.results.map( r => (
      <li key={r.name} className='autocomplete-items'>
        {r.name}
      </li>
    ))
    return <ul className='autocomplete-list'>{options}</ul>
  }
}

export default InputScreen;