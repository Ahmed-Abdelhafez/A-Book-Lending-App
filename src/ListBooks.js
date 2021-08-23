import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookCategory from './BookCategory'

class ListBooks extends Component {
    render() {
        const { books, onChangeBookCategory } = this.props
        return(

          <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div>

          <BookCategory 
            title="Currently Reading"
            books={books.filter(b => b.shelf === "currentlyReading")}
            onChangeBookCategory={onChangeBookCategory}/>
          <BookCategory 
            title="Want to Read"
            books={books.filter(b => b.shelf === "wantToRead")}
            onChangeBookCategory={onChangeBookCategory}/>
          <BookCategory 
            title="Read"
            books={books.filter(b => b.shelf === "read")}
            onChangeBookCategory={onChangeBookCategory}
          />

          <div className="open-search">
            <Link className="open-search" to="/search">Add a book</Link>
          </div>
          </div>
          </div>
        )
    }
}

export default ListBooks