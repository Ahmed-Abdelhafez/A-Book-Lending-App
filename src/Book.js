import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

    render() {
        const { title, author, id, shelf, onChangeBookCategory, imageLink } = this.props
        return(
            <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")' }}></div>
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