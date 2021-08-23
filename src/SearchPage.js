import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchResult: []
        }
    }

    handleChange = (query) => {
        if(query){
            BooksAPI.search(query).then(books => {
                if(Array.isArray(books)) {
                    this.setState({
                        searchResult: []
                    })
                    return
                }
            })
        }
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
              <ol className="books-grid"></ol>
            </div>
          </div>
        )
    }
}

export default SearchPage