import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import Book from "./Book";
import {Link} from "react-router-dom";
import BookShelf from "./BookShelf";

class SearchPage extends Component{
    state = {
        searchResults: [],
    }

    handleInputChange = (query) => {
        BooksAPI.search(query).then((res)=> {
            !('error' in res)&&this.setState(() => ({
                    searchResults: res,
                }))
        }).catch(()=>(
            this.setState(()=>({
                searchResults: []
            }))
        ));
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                               placeholder="Search by title or author"
                               onChange={(e)=>this.handleInputChange(e.target.value)}/>

                    </div>
                </div>
                <BookShelf books={this.props.books} changeShelf={this.props.changeShelf}/>
                <div className="search-books-results">
                    <div className='bookshelf-books'>
                        <ol className='books-grid'>
                            {
                                this.state.searchResults.map(
                                    b => <Book key={b.id} book={b} changeShelf={this.props.changeShelf}/>
                                )
                            }
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchPage;