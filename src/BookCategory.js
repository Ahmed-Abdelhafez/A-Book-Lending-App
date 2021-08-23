import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class ListBooks extends Component {
    render() {
        const { title, books, onChangeBookCategory } = this.props
        return(
          <div className="bookshelf">
          <h2 className="bookshelf-title"> { title } </h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {books.length > 0 && (books.map((book) => (
                <Book
                  id={book.id}
                  key={book.id}
                  title={book.title}
                  imageLinks={book.imageLinks}
                  shelf={book.shelf}
                  authors={book.authors}
                  onChangeBookCategory={onChangeBookCategory}
                />
            )))}
            </ol>
          </div>
        </div>
        )
    }
}

export default ListBooks