import React, { Component } from 'react';
import axios from 'axios'
import BookList from '../../components/BookList'
import SearchBox from '../../components/SearchBox'

class BookListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      loading: true,
      error: null
    }
  }
  componentDidMount() {
    this.fetchBooks()
  }
  updateBooks(res) {
    this.setState({
      books: res.data,
      loading: false
    })
  }
  updateError(err) {
    this.setState({
      loading: false,
      error: err
    })
  }
  fetchBooks() {
    const {term} = this.state
    axios.get(`http://localhost:8080/books?q=${term}`).then(this.updateBooks).catch(this.updateError)
  }
  filterBook(e) {
    this.setState({
      term: e.target.value
    }, this.fetchBooks)
  }

  render() {
    return(
      <div>
        <SearchBox term={this.state.term} onChange={this.filterBook}/>
        <BookList {...this.state}/>
      </div>
    )
  }
}
export default BookListContainer
