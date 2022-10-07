import {
  FETCH_BOOKS_FAILURE,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS
} from "./books.actionTypes.jsx"

const booksInitialState = {
  isLoading: false,
  books: {
    models: [],
    totalItems: 0
  },
  errorMsg: null
}

const BooksReducer = (state = booksInitialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:return {
        ...state,
        isLoading: true,
    }
    case FETCH_BOOKS_SUCCESS: return {
      isLoading: false,
      books: action.payload
    }
    case FETCH_BOOKS_FAILURE: return {
      isLoading: false,
      books: {},
      errorMsg: action.payload
    }
    default: return state
  }
}

export default BooksReducer