import axios from "axios";
import {
  FETCH_BOOK_REQUEST, FETCH_BOOK_SUCCESS,
} from "./book.actionTypes.jsx";

const fetchBookRequest = () => ({
  type: FETCH_BOOK_REQUEST
})

const fetchBookSuccess = (book) => ({
  type: FETCH_BOOK_SUCCESS,
  payload: book
})

export const fetchBook = (id) => {
  return (dispatch) => {
    dispatch(fetchBookRequest)
    axios.get('http://localhost:8888/api/books/' + id, {
      headers: {
        Authorization: 'bearer ' + localStorage.getItem('token')
      }
    })
      .then(response => {
        const book = {
          id: response.data.id,
          name: response.data.name,
          description: response.data.description,
          text: response.data.text,
          category: response.data.category
        }
        dispatch(fetchBookSuccess(book))
      })
      .catch(error => {
        alert(error.message)
      })
  }
}

export default fetchBook
