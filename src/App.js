import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchPage from './SearchPage';
import { Link, Route } from 'react-router-dom';

class BooksApp extends React.Component {
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

  onChangeBookCategory = (book, category) => {
      BooksAPI.update(book, category).then(books => {
        this.setState(state => {
          let bookUpdate = state.books.find(existingBook => book.id === existingBook.id)
        
          if(!bookUpdate){
            state.books.push(book)
            bookUpdate = book
          }

          bookUpdate.category = category
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
