import React, { useState } from "react";

const Movie = () => {
  const [movie, setMovie] = useState({
    title: "",
    rating: "",
    summary: "",
    medium_cover_image: "",
  });

  function inputHandle(e) {
    setMovie({ ...movie, [e.target.name]: e.target.value });
    console.log(movie);
  }

  function submitMovie(e) {
    e.preventDefault(); //form안의 버튼은 submit할라고 난리침 그걸 막는거
    let jsonMovie = JSON.stringify(movie);
    console.log(jsonMovie);

    fetch("http://10.100.102.2:8000/api/movie", {
      method: "post",
      headers: {
        "Content-Type": "application/json;charset=utf-8", //json인데 utf-8로 던질게
      },
      body: jsonMovie,
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          alert("영화 등록 성공.");
          window.history.back();
        } else {
          alert("영화 등록 실패.");
        }
      });
  }

  function reset(e) {
    e.preventDefault();
    setMovie({
      title: "",
      rating: "",
      summary: "",
      medium_cover_image: "",
    });
    //document.querySelector("input").value = user;
  }
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={inputHandle}
          name="title"
          value={movie.title}
          placeholder="title 입력하셈."
        />
        <br />
        <input
          type="text"
          onChange={inputHandle}
          name="rating"
          value={movie.rating}
          placeholder="rating 입력하셈."
        />
        <br />
        <input
          type="text"
          onChange={inputHandle}
          name="summary"
          value={movie.summary}
          placeholder="summary 입력하셈."
        />
        <br />
        <input
          type="text"
          onChange={inputHandle}
          name="medium_cover_image"
          value={movie.medium_cover_image}
          placeholder="medium_cover_image 입력하셈."
        />
        <br />
        <button onClick={reset}>리셋</button>
        <button onClick={submitMovie}>전송</button>
      </form>
    </div>
  );
};

export default Movie;
