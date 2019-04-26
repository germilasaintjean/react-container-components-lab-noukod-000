import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    supre(props);

    this.state = {
      search: []
    }
  }

  componentDidMount() {
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>')
    .then(response => response.json())
    .then(search => this.setState({ search }))
  }
}

render search = () =>  {
  return  this.state.books.map(search =>)

  )
}
