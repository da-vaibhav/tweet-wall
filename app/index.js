import React, {Component} from 'react';
import {render} from 'react-dom';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import 'whatwg-fetch';

class App extends Component {
  constructor(){
    super(...arguments);
    // initial state here
    this.state = {
      query: '',
      geocode: '',
      lang: 'En',
      tweets: [],
      isSearching: false
    };
  }

  onSearch(queryObj){
    // if search term matches to the one store in localStorage, get tweets stored in localStorage
    // don't make network request, load quickly from localStorage data
    if(queryObj.q === window.localStorage.getItem('search')){
      let tweets_data = JSON.parse(window.localStorage.getItem('tweets'));
      this.setState({
        tweets: tweets_data
      });
      return;
    }
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
        // if responseData.statuses.length > 0, then clear previous saved tweets and set new one
        if(responseData.statuses.length){
          // save response tweets data in localStorage
          window.localStorage.setItem('tweets', JSON.stringify(responseData.statuses));
          window.localStorage.setItem('search', q)
          window.localStorage.setItem('geocode', geocode);
        }
        this.setState({
          tweets: responseData.statuses
        });
      })
      .catch((err) => console.log(err));
  }

  render(){
    return(
      <div>
        <h2>Search tweets</h2>
        <SearchForm q={this.state.query} handleSearch={this.onSearch.bind(this)} isSearching={this.props.isSearching}/>
        <SearchResults results={this.state.tweets} />
      </div>
    );
  }
}

render(<App />, document.querySelector('#root'));
