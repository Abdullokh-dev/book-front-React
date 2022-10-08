import {
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS
} from "./categories.actionTypes.jsx"

const categoriesInitialState = {
  isLoading: false,
  categories: {
    models: [],
    totalItems: 0
  },
  errorMsg: null
}

const CategoriesReducer = (state = categoriesInitialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:return {
        ...state,
        isLoading: true,
    }
    case FETCH_CATEGORIES_SUCCESS: return {
      isLoading: false,
      categories: action.payload
    }
    case FETCH_CATEGORIES_FAILURE: return {
      isLoading: false,
      categories: {},
      errorMsg: action.payload
    }
    default: return state
  }
}

export default CategoriesReducer
