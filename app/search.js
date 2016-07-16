import React, {Component} from 'react';
import {render} from 'react-dom';

class Search extends Component {
  onSearch(event){
    event.preventDefault();
    let queryObj = {
      q: this.refs.search_input.value,
      geocode: this.refs.geocode.value,
      lang: this.refs.lang.value
    }
    this.props.handleSearch(queryObj);
  }

  render(){
    return(
      <form>
        <input type="text" autoComplete="on" ref="search_input"/> {' '}
        <input type="text" autoComplete="on" placeholder="enter geolocode, example De, En" ref="geocode"/> {' '}
        <select name="" id="" ref="lang">
          <option value="En">English</option>
          <option value="De">Deutsch/German</option>
        </select>{' '}
        <button type="submit" onClick={this.onSearch.bind(this)}>Search</button>
        {this.props.isSearching ? "Searching...": ''}
      </form>
    );
  }
}

export default Search;
