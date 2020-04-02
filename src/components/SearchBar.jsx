import React from 'react'

const API_URL = "http://localhost:5000";

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
        fetch(API_URL + '/suggest?text=' + this.state.query)
        .then((response) => response.json())
        .then((names) => this.setState({results: names.slice(0,9)}))
      } else {
        this.setState({results: []})
      }
    }
    
    continue = (str) => {
      this.props.setItem(str);
      this.props.continue();
    }
  
    render() {
      return (
        <div>
          <form className='autocomplete'>
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
          <button onClick={() => this.continue(this.state.query)}>Continue</button>
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