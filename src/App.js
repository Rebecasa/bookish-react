import React from "react";
import {Route} from 'react-router-dom'
import "./App.css";
import BookListContainer from './containers/BookListContainer/'
import BookDetailContainer from './containers/BookDetailContainer/'

function App() {
  return (
    <div className="App">
      <h1>Bookish</h1>
        <main>
           <Route exact path="/" component={BookListContainer} />
           <Route path="/books/:id" component={BookDetailContainer} />
        </main>
    </div>
  )
}
export default App;



