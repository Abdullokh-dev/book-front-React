import {FETCH_BOOK_REQUEST, FETCH_BOOK_SUCCESS} from "./book.actionTypes.jsx";

const bookInitialState = {
  book: {
    id: null,
    name: null,
    description: null,
    text: null,
    category: null
  },
}

const BookReducer = (state = bookInitialState, action) => {
  switch (action.type) {
    case FETCH_BOOK_REQUEST:return {
      ...state,
    }
    case FETCH_BOOK_SUCCESS: return {
      book: action.payload
    }
    default: return state
  }
}

export default BookReducer
