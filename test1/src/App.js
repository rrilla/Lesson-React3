import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import List from "./components/List";
import Movie from "./components/Movie";
import MovieDetail from "./components/MovieDetail";
import Header from "./Header";

const Section1S = styled.div``;

function App() {
  return (
    <div>
      <Header />
      <Section1S>
        <Route path="/add" exact={true} component={Movie} />
        <Route path="/" exact={true} component={List}></Route>
        <Route path="/detail/:id" exact={true} component={MovieDetail} />
      </Section1S>
    </div>
  );
}

export default App;
