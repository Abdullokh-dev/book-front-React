import axios from "axios";
import {
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS
} from "./categories.actionTypes.jsx";

const fetchCategoriesRequest = () => ({
  type: FETCH_CATEGORIES_REQUEST
})

const fetchCategoriesSuccess = (categories) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: categories
})

const fetchCategoriesFailure = (errorMsg) => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: errorMsg
})

export const fetchCategories = () => {
  return (dispatch) => {
    dispatch(fetchCategoriesRequest)
    axios.get('http://localhost:8888/api/categories', {
      headers: {
        Authorization: 'bearer ' + localStorage.getItem('token')
      }
    })
      .then(response => {
        const categories = {
          models: response.data['hydra:member'],
          totalItems: response.data['hydra:totalItems'],
        }

        dispatch(fetchCategoriesSuccess(categories))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(fetchCategoriesFailure(errorMsg))
        alert(error.message)
        window.location = '/login';
      })
  }
}