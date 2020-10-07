import React, { useEffect, useState } from "react";
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

  function test() {
    fetch(`/v1/search/movie.json?query=터널`, {
      //mode: "no-cors",
      headers: {
        Host: "openapi.naver.com",
        "X-Naver-Client-Id": "oGg2VmAaJ_j2XxwuVSEx",
        "X-Naver-Client-Secret": "usAAqIbqL4",
        // Connection: "keep-alive",
        Accept: "*/*",
        // "Accept-Encoding": "gzip, deflate, br",
        "User-Agent": "curl/7.49.1",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => {
        console.log(1, res);
        res.json();
        console.log(2, res);
      })
      .then((res) => console.log(3, res));
    // const response = await axios.get(
    //   'https://openapi.naver.com/v1/search/movie.json?query=터널'
    // );
    // console.log(response.data)
  }

  return (
    <div>
      <form>
        <InputS
          type="text"
          onChange={inputHandle}
          name="title"
          value={movie.title}
        />
        <br />
        <InputS
          type="number"
          onChange={inputHandle}
          name="rating"
          value={movie.rating}
        />
        <br />
        <InputS
          type="text"
          onChange={inputHandle}
          name="summary"
          value={movie.summary}
        />
        <br />
        <InputS
          type="text"
          onChange={inputHandle}
          name="medium_cover_image"
          value={movie.medium_cover_image}
        />
        <br />
        <ButtonS onClick={reset}>리셋</ButtonS>
        <ButtonS onClick={submitMovie}>수정</ButtonS>
      </form>
      <h1>관련영화</h1>
      <div>ㅁㅇㄻㄴㅇㄹ</div>
      <button onClick={test}>테스트</button>
    </div>
  );
};

export default MovieDetail;
