import React, { useState } from "react";
import styled from "styled-components";

const InputS = styled.input`
  width: 100%; /* 원하는 너비 설정 */
  height: 40px; /* 높이값 초기화 */
  line-height: normal; /* line-height 초기화 */
  padding: 0.8em 0.5em; /* 원하는 여백 설정, 상하단 여백으로 높이를 조절 */
  font-family: inherit; /* 폰트 상속 */
  border: 1px solid #999;
  border-radius: 0%; /* iSO 둥근모서리 제거 */
  outline-style: none; /* 포커스시 발생하는 효과 제거를 원한다면 */
  -webkit-appearance: none; /* 브라우저별 기본 스타일링 제거 */
  -moz-appearance: none;
  appearance: none;
`;

const ButtonS = styled.button`
  color: white;
  width: 70px;
  height: 30px;
  background-color: #aa1212;
  box-shadow: 1px 1px 0px 0px rgb(167, 111, 111);
`;

const Movie = () => {
  const [movie, setMovie] = useState({});

  function inputHandle(e) {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  }

  function submitMovie(e) {
    e.preventDefault();
    let jsonMovie = JSON.stringify(movie);
    console.log("등록한 데이터 : " + jsonMovie);

    fetch("http://10.100.102.2:8000/api/movie", {
      method: "post",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
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
  }
  return (
    <div>
      <form>
        <InputS
          type="text"
          onChange={inputHandle}
          name="title"
          value={movie.title}
          placeholder="title 입력하셈."
        />
        <br />
        <InputS
          type="number"
          onChange={inputHandle}
          name="rating"
          value={movie.rating}
          placeholder="rating 입력하셈."
        />
        <br />
        <InputS
          type="text"
          onChange={inputHandle}
          name="summary"
          value={movie.summary}
          placeholder="summary 입력하셈."
        />
        <br />
        <InputS
          type="text"
          onChange={inputHandle}
          name="medium_cover_image"
          value={movie.medium_cover_image}
          placeholder="medium_cover_image 입력하셈."
        />
        <br />
        <ButtonS onClick={reset}>리셋</ButtonS>
        <ButtonS onClick={submitMovie}>등록</ButtonS>
      </form>
    </div>
  );
};

export default Movie;
