import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchResult: []
        }
    }

    handleChange = (query) => {
        
        if(query){
            BooksAPI.search(query).then(booksData => {
                if(!Array.isArray(booksData)) {
                    this.setState({
                        searchResult: []
                    })
                    return
                }
                this.setState({
                    searchResult: booksData.map(book => {
                        const found = this.props.books.find(existingBook => book.id === existingBook.id)
                        if(found)
                            book.shelf = found.shelf
                        else
                            book.shelf = 'none'
                        
                        return book
                    })
                })
            })
        } else {
            this.setState({
                searchResult:[]
            })
        }
    }

    onChangeBookCategory = (book, shelf) => {
        const found = this.state.searchResult.find(b => book.id === b.id)
            this.setState(state => ({
                searchResult: state.searchResult.map(existingBook => {
                    if(existingBook.id === book.id){
                        existingBook.shelf = shelf
                    }
                    return existingBook
                })
            }))
        this.props.onChangeBookCategory(found, shelf)
    }
    render() {
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" 
                placeholder="Search by title or author"
                onChange={(e) => this.handleChange(e.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.searchResult.length > 0 && (this.state.searchResult.map((book) => (
                    <Book 
                    id={book.id}
                    title={book.title}
                    imageLinks={book.imageLinks}
                    shelf={book.shelf}
                    author={book.author}
                    onChangeBookCategory={this.onChangeBookCategory}
                    />
                ))
                )}
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchPage