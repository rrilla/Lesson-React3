import React from "react";
import { Route } from "react-router-dom";
import List from "./components/List";
import Movie from "./components/Movie";
import MovieDetail from "./components/MovieDetail";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header />
      <Route path="/add" exact={true} component={Movie} />
      <Route path="/list" exact={true} component={List}></Route>
      <Route path="/detail/:id" exact={true} component={MovieDetail} />
    </div>
  );
}

export default App;
