import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieItem from "./MovieItem";

const GridS = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 30px;
  justify-content: space-around;
  margin: 10px;
`;

const List = () => {
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
        } else {
          console.log(res);
          alert("삭제 실패.");
        }
      });
  }

  return (
    <GridS>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} deleteById={deleteById} />
      ))}
    </GridS>
  );
};

export default List;
