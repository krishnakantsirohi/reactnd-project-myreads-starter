import React, {Component} from 'react';

class Book extends Component{

    render() {
        const {book, changeShelf} = this.props;
        return (
            ('imageLinks' in book &&<li>
                <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
    width: 128,
    height: 193,
    backgroundImage: `url(${book.imageLinks.thumbnail})`
}}/>
                    <div className="book-shelf-changer">
                        <select onChange={e=>changeShelf(book, e.target.value)} defaultValue={book.shelf}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
            </li>)
        )
    };
}

export default Book;