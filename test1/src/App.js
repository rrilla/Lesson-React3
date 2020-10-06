import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Movie from "./components/Movie";
import MovieDetail from "./components/MovieDetail";
import MovieList from "./components/MovieList";
import Header from "./Header";

function App() {
  // const GridS = styled.div`
  //   display: grid;
  //   grid-template-columns: auto auto auto;
  //   grid-gap: 30px;
  //   justify-content: space-around;
  //   margin: 10px;
  // `;

  // const ButtonS = styled.button`
  //   color: white;
  //   width: 70px;
  //   height: 30px;
  //   background-color: red;
  //   box-shadow: 1px 1px 0px 0px rgb(167, 111, 111);
  // `;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://10.100.102.2:8000/api/movie")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setMovies(res);
      });
  }, []);

  function deleteById(movieId) {
    fetch(`http://10.100.102.2:8000/api/movie/${movieId}`, { method: "DELETE" })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          alert("삭제 성공.");
          setMovies(movies.filter((movie) => movie.id !== movieId));
        } else alert("삭제 실패.");
      });
  }

  return (
    <div>
      <Header />
      <Route path="/add" exact={true} component={Movie} />
      <div className="grid-container">
        <Route path="/list" exact={true}>
          {movies.map((movie) => (
            <MovieList key={movie.id} movie={movie} deleteById={deleteById} />
          ))}
        </Route>
      </div>
      <Route path="/detail/:id" exact={true} component={MovieDetail} />
      {/* <div>
        <Link to="/add">영화 등록</Link>
        <button>영화 수정</button>
      </div>
      <div className="grid-container">
        {movies.map((movie) => (
          <MovieList key={movie.id} movie={movie} deleteById={deleteById} />
        ))}
      </div>
      <Route path="/add" exact={true} component={Movie} /> */}
    </div>
  );
}

export default App;
