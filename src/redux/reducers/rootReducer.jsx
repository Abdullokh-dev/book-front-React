import {combineReducers} from "redux";
import BooksReducer from "./books/books.reducer.jsx";
import BookReducer from "./book/book.reducer.jsx";
import CategoriesReducer from "./categories/categories.reducer.jsx";

const rootReducer = combineReducers({
  books: BooksReducer,
  bookId: BookReducer,
  categories: CategoriesReducer
});

export default rootReducer
