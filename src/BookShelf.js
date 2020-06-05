import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Shelf from "./Shelf";

class BookShelf extends Component{
    render() {
        const shelves = [
            ['Currently Reading', 'currentlyReading'],
            ['Want to Read', 'wantToRead'],
            ['Read', 'read']
        ]
        return(
            <div className='list-books'>
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className='list-books-content'>
                    <div>
                        {
                            shelves.map((s) => (<Shelf key={s} books={this.props.books} shelfName={s} changeShelf={this.props.changeShelf}/>))
                        }
                    </div>
                </div>
                <div className="open-search">
                    <Link
                        to='/search'><button/>
                    </Link>
                </div>
            </div>
        );
    }
}

export default BookShelf;