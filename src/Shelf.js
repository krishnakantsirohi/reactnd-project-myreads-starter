import React, {Component} from 'react';
import Book from "./Book";

class Shelf extends Component{
    render() {
        return (
            <div className='bookshelf'>
                <h2 className='bookshelf-title'>{this.props.shelfName[0]}</h2>
                <div className='bookshelf-books'>
                    <ol className='books-grid'>
                        {
                            this.props.books.map(b => b.shelf===this.props.shelfName[1] && <Book key={b.id} book={b} changeShelf={this.props.changeShelf}/>)
                        }
                    </ol>
                </div>
            </div>
        )
    };
}
export default Shelf;