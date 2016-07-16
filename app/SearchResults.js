import React, {Component} from 'react';

class SearchResults extends Component {
  constructor(){
    super(...arguments);
    this.state = { query: '' };
  }

  render(){
    let li;
    if(this.props.results.length){
      console.log('results found');
      li = this.props.results.map((tweet) => (
        <li key={tweet.id} className="tweet">
          <div>
            <img src={tweet.user.profile_image_url} alt={tweet.user.name}/>
          </div>
          <p>@{tweet.user.name}</p>
          <p>{tweet.user.screen_name}</p>
          <p>{tweet.text}</p>
        </li>
      ))
    } else {
      console.log('no results found!');
      li = 'No results.';
    }
    return(
      <ul>
        {li}
      </ul>
    );
  }
}

export default SearchResults;
