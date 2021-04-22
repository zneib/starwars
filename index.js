import React from "react";
import ReactDOM from 'react-dom';
import GlobalState from './context/globalState'
import Search from './components/Search'

export default function Base() {
  return (
    <GlobalState>
      <Search />
    </GlobalState>
  )
}

let root = document.getElementById("app");

ReactDOM.render(<Base />, root);