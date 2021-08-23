import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class ListBooks extends Component {
    render() {
        return(
          <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
            <div className="list-books-content">
            <div>
             
            </div>
          </div>
          <div className="open-search">
              <Link class='open-search' to='/search'>Add a book</Link>
            </div>
        </div>
        )
    }
}

export default ListBooks