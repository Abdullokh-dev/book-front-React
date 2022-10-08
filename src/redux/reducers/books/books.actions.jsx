import axios from "axios";
import {
  FETCH_BOOKS_FAILURE,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS
} from "./books.actionTypes.jsx";

const fetchBooksRequest = () => ({
  type: FETCH_BOOKS_REQUEST
})

const fetchBooksSuccess = (books) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: books
})

const fetchBooksFailure = (errorMsg) => ({
  type: FETCH_BOOKS_FAILURE,
  payload: errorMsg
})

export const fetchBooks = (categoryId) => {
  return (dispatch) => {
    dispatch(fetchBooksRequest)
    let categoryUrl = ''

    if(categoryUrl !== null) {
      categoryUrl = '?category=' + categoryId
    }

    axios.get('http://localhost:8888/api/books' + categoryUrl , {
      headers: {
        Authorization: 'bearer ' + localStorage.getItem('token')
      }
    })
      .then(response => {
        const books = {
          models: response.data['hydra:member'],
          totalItems: response.data['hydra:totalItems'],
        }

        dispatch(fetchBooksSuccess(books))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(fetchBooksFailure(errorMsg))
        alert(error.message)
        window.location = '/login';
      })
  }
}