import {
  GET_SEARCHRESULT,
  SET_SEARCHRESULT,
  SET_LOADING,
} from './types'

export default (state, action) => {
  switch (action.type) {
    case GET_SEARCHRESULT:
      return {
        ...state,
        searchResults: action.payload,
        loading: false
      }
    case SET_SEARCHRESULT:
      return {
        ...state,
        searchResults: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}