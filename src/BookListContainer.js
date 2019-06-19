import React, { Component } from 'react';
import axios from 'axios'
import BookList from './BookList'

class BookListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:8080/books').then(res => {
      this.setState({
        books: res.data
      })
    })
  }
  render() {
    return <BookList {...this.state} />
  }
}
export default BookListContainer
