import React, { useEffect, useState } from "react";

const MovieDetail = (props) => {
  const id = props.match.params.id;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`http://10.100.102.2:8000/api/movie/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setMovie(res);
      });
  }, []);

  function inputHandle(e) {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  }

  function submitMovie(e) {
    e.preventDefault();
    let jsonMovie = JSON.stringify(movie);
    console.log("수정한 데이터 : " + jsonMovie);

    fetch(`http://10.100.102.2:8000/api/movie/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: jsonMovie,
    })
      .then((res) => res.text())
      .then((res) => {
        console.log(res);
        if (res === "ok") {
          alert("영화 수정 성공.");
          window.history.back();
        } else {
          alert("영화 수정 실패.");
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
  }

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={inputHandle}
          name="title"
          value={movie.title}
        />
        <br />
        <input
          type="text"
          onChange={inputHandle}
          name="rating"
          value={movie.rating}
        />
        <br />
        <input
          type="text"
          onChange={inputHandle}
          name="summary"
          value={movie.summary}
        />
        <br />
        <input
          type="text"
          onChange={inputHandle}
          name="medium_cover_image"
          value={movie.medium_cover_image}
        />
        <br />
        <button onClick={reset}>리셋</button>
        <button onClick={submitMovie}>수정</button>
      </form>
    </div>
  );
};

export default MovieDetail;
