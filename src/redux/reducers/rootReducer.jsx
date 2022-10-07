import {combineReducers} from "redux";
import BooksReducer from "./books/books.reducer.jsx";
import BookReducer from "./book/book.reducer.jsx";

const rootReducer = combineReducers({
  books: BooksReducer,
  bookId: BookReducer
});

export default rootReducer;