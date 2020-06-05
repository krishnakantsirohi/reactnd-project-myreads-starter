import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import Book from "./Book";
import {Link} from "react-router-dom";

class SearchPage extends Component{
    state = {
        query:'',
        searchResults: [],
    }

    handleInputChange = (query) => {
        if (query==='')
            this.setState(()=>({
            searchResults: [],
            }))
        else
        BooksAPI.search(query).then((res)=> {
            for (let r of res){
                r.shelf='none';
                for (let b of this.props.books){
                    if (r.id===b.id) {
                        r.shelf = b.shelf;
                    }
                }
            }
            !('error' in res)&&this.setState(() => ({
                searchResults: res,
                }))
        });
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
                <div className='search-books-results'>
                    <div>
                        <ol className='books-grid'>
                            {
                                this.state.searchResults.map((book) => (<Book key={book.id} book={book} changeShelf={this.props.changeShelf}/>))
                            }
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchPage;