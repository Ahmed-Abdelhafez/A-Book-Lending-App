import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchPage from './SearchPage';
import { Route } from 'react-router-dom';

class BooksApp extends Component {
  state = {
    query: '',
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books
      })
    })
  }

  componentDidUpdate() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books
      })
    }) 
  }
  onChangeBookCategory = (book, category) => {
      BooksAPI.update(book, category).then(books => {
        books = [].concat(
          books.currentlyReading,
          books.wantToRead,
          books.read
        )
        this.setState(state => {
          let bookUpdate = state.books.find(existingBook => book.id === existingBook.id)
        
          if(!bookUpdate){
            state.books.push(book)
            bookUpdate = book
          }

          bookUpdate.category = category

          state.books = books.map(bookId => state.books.find(book => book.id === bookId))

          return state
        })
      })
  }

  render() {
    return (
      <div className="app">
          
          <Route path='/search' render={() => (
            <SearchPage 
            books={this.state.books}
            onChangeBookCategory={this.onChangeBookCategory}
            />
          )}>
          
          </Route>

          <Route exact path='/' render={() => (
            <ListBooks 
            books={this.state.books}
            onChangeBookCategory = {this.onChangeBookCategory}
            />
          )}>
          </Route>
      </div>
    )
  }
}

export default BooksApp
