import React from 'react'
import BackButton from '../BackButton.jsx'

class SearchBar extends React.Component {
    state = {
      query: '',
      results: []
    }
   
    handleInputChange = () => {
      this.setState({query: this.search.value}, this.getInfo);
    }
  
    getInfo = () => {
      if (this.state.query && this.state.query.length > 0) {
        fetch(window.API_URL + '/suggest?text=' + this.state.query)
        .then((response) => response.json())
        .then((names) => this.setState({results: names.slice(0,6)}))
      } else {
        this.setState({results: []});
      }

    }
    
    continue = (str) => {
      this.props.setItem(str);
      this.props.continue();
    }

    handleSubmit = (event) => {
      event.preventDefault();
      this.continue(this.state.query)
    }
  
    render() {
      return (
        <div className='autocomplete'>
          <BackButton back={() => this.props.changeState('input')}/>
          <form className='autocomplete' onSubmit={this.handleSubmit}>
            <input
              type="text" 
              name="searchbar"
              className="input" 
              placeholder="Search..."
              ref={input => this.search = input} 
              onChange={this.handleInputChange}
            />
            <Suggestions 
              results={this.state.results} 
              select={(str) => this.continue(str)}
            />
          </form>
          { (this.state.query == '')
            ? <button className='disabled'> Continue </button>
            : <button onClick={() => this.continue(this.state.query)}>Continue</button>}
        </div>
      );
    }
  }
  
  class Suggestions extends React.Component {
    render() {
      const options = this.props.results.map( r => (
        <li key={r.name} 
            className='autocomplete-items'
            onClick={() => this.props.select(r.name)}>
          {r.name}
        </li>
      ))
      return <ul className='list'>{options}</ul>
    }
  }
  
  export default SearchBar;