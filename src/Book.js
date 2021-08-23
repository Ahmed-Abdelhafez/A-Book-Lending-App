import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

    render() {
        const { title, author, id, shelf, onChangeBookCategory, imageLinks } = this.props
        return(
            <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${ imageLinks && imageLinks.thumbnail?`${imageLinks.thumbnail}`: `https://www.forewordreviews.com/books/covers/not-for-profit.jpg`})` }}></div>
              <div className="book-shelf-changer">
              <select value={shelf}
                    onChange={(e) => {
                        onChangeBookCategory({ id }, e.target.value)
                    }}
                >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">
            {(author || []).map((author, id) => (
            <div key={id} className="book-authors"> {Array.isArray(author)?author.join(', '):''} </div>)
            )}
          </div>
          </div>
        )
    }
}

export default Book