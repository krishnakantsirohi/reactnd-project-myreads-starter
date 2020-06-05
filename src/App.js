import React from 'react'
import './App.css'
import {Route} from 'react-router-dom';
import SearchPage from "./SearchPage";
import BookShelf from "./BookShelf";
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
    state = {
        books: [],
    }

    componentDidMount() {
        BooksAPI.getAll().then((books)=>(
            this.setState(()=>({
                books: books,
            }))
        ))
    }

    changeShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(()=>
            BooksAPI.getAll().then((books)=>(
                this.setState(()=>({
                    books:books
                }))
            ))
        );
    }

    render() {
    return (
      <div className="app">
        <Route exact path='/' render={()=>(<BookShelf books={this.state.books} changeShelf={this.changeShelf}/>)}/>
        <Route exact path='/search' render={()=>(<SearchPage books={this.state.books} changeShelf={this.changeShelf}/>)}/>
      </div>
    )
  }
}

export default BooksApp
