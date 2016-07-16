import React, {Component} from 'react';
import Media from './Media';

class SearchResults extends Component {
  constructor(){
    super(...arguments);
  }

  renderMedia(entities){
    if(entities.media && entities.media.length){
      let mediaObj = entities.media
                      .map((m) => (
                        <Media key={m.media_url} src={m.media_url} alt={m.media_url} />
                    ));
      return (
        <div className="media-container">
          {mediaObj}
        </div>
      );
    }
  }

  render(){
    let li;

    if(this.props.results.length){
      li = this.props.results.map((tweet) => (
        <li key={tweet.id} className="tweet">
          <div>
            <img src={tweet.user.profile_image_url} alt={tweet.user.name}/>
            <br/>
            <a href={"http://twitter.com/" + tweet.user.screen_name} target="_blank">
              @{tweet.user.screen_name}
            </a>
          </div>
          <p>{tweet.user.name}</p>
          <p className="tweet-text">{tweet.text}</p>
          {this.renderMedia(tweet.entities)}
        </li>
      ));
    } else {
      li = React.createElement('li',{ className: 'empty_list' },'No results.');
    }

    return(
      <ul className="tweets-list">
        {li}
      </ul>
    );
  }
}

export default SearchResults;
