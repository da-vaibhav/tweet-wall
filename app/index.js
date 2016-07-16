import React, {Component} from 'react';
import {render} from 'react-dom';
import Search from './Search';
import SearchResults from './SearchResults';
import 'whatwg-fetch';

class App extends Component {
  constructor(){
    super(...arguments);
    this.state = {
      query: '',
      geocode: '',
      lang: 'En',
      tweets: [],
      isSearching: false
    };
  }

  onSearch(queryObj){
    this.fetchTweets(queryObj);
  }

  fetchTweets(query_params){
    let {q, geocode, lang} = query_params;
    let geoCode = geocode ? `&geocode=${geocode}` : '';
    if(!q) {
      alert('Please enter some value!');
      return;
    }
    // change here
    var baseUrl = 'http://api.twitter.com/';
    const queryUrl = `${baseUrl}1.1/search/tweets.json?q=${q}${geoCode}&lang=${lang}`;

    fetch(queryUrl)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        this.setState({
          tweets: responseData.statuses
        });
        console.log(this.state.tweets);
      })
      .catch((err) => console.log(err));
  }

  render(){
    return(
      <div>
        <h2>Search tweets</h2>
        <Search q={this.state.query} handleSearch={this.onSearch.bind(this)} isSearching={this.props.isSearching}/>
        <SearchResults results={this.state.tweets} />
      </div>
    );
  }
}

// export default App;

render(<App />, document.querySelector('#root'));
