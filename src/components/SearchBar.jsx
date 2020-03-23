import React from 'react'

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
        const url = 'http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=' + this.state.query + '&api_key=b264cc6a326b887db91199d794593d58&format=json';
        fetch(url)
        .then((response) => response.json())
        .then((data) => this.setState({results: data.results.artistmatches.artist.slice(0,9)}));
      } else {
        this.setState({results: []})
      }
    }

    continue(str) {
      console.log('searchbar: continue')
      this.props.setItem(str);
      this.props.continue();
    }
  
    render() {
      return (
        <div>
          <form className='autocomplete'>
            <input
              type="text" 
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
      return <ul className='autocomplete-list'>{options}</ul>
    }
  }
  
  export default SearchBar;