import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
 class SearchableMovieReviewsContainer extends React.Component {
   state = {
     reviews: [],
      searchTerm: ""
    }

    handleChange = event => {
      const temp = event
      this.setState({
        [event.target.name]: event.target.value
      })
    }

   handle Submit = event => {
     event.preventDefault()
     const term = this.state.search-term

     const newURL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + term + `&api-key=f98593a095b44546bf4073744b540da0`;

     fetch(newURL)
    .then(response => response.json())
    .then(data => {
      const temp2 = data.results

      this.setState({
        reviews: temp2
      })
  })

}

render () {
  return  <div className="searchable-movie-reviews">
<MovieReviews reviews={this.state.reviews} />
<form onSubmit={event => this.handleSubmit(event)}>
    <div>
      <label>
         Search term
         <input id="searchTerm" name"searchTerm" type="text" value={this.state.searchTerm} onChange={this.handleChange} />
        </label>
        <div>
     </form>
     </div>;

   }

}
