import React, { useReducer } from 'react'
import GlobalContext from './globalContext'
import GlobalReducer from './globalReducer'
import { GET_SEARCHRESULT, SET_LOADING, SET_SEARCHRESULT } from './types'

const GlobalState = props => {
  const initialState = {
    searchResults: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(GlobalReducer, initialState)

  const resetSearch = async () => {
    dispatch({
      type: SET_SEARCHRESULT,
      payload: []
    })
  }

  const search = async (param) => {
    const res = await fetch(`https://swapi.dev/api/${param}`)
    const data = await res.json()
    setLoading()

    dispatch({
      type: GET_SEARCHRESULT,
      payload: data.results
    })
  }

  const setLoading = () => dispatch({ type: SET_LOADING })

  return (
    <GlobalContext.Provider
      value={{
        loading: state.loading,
        searchResults: state.searchResults,
        search,
        resetSearch,
        setLoading
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalState