import React from "react";
import "./App.css";

const MovieItem = (props) => {
  //구조 분할 할당
  const { title, rating, id, medium_cover_image } = props.movie;
  const deleteById = props.deleteById;

  // function deleteById(e) {
  //   console.log(e);

  //   fetch(`http://10.100.102.2:8000/api/movie/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then(function (res) {
  //       //console.log(res);
  //       return res.text();
  //     })
  //     .then(function (res) {
  //       //console.log(res);
  //       if (res == "ok") {
  //         console.log(res);
  //         //alert("삭제 성공");
  //         window.location.reload();
  //       } else {
  //         alert("삭제 실패");
  //       }
  //     });
  // }

  return (
    <div>
      <img src={medium_cover_image} alt="" />
      <div class="card-body">
        <h4 class="card-title">{title}</h4>
        <p class="card-text">{rating}</p>
        <button onClick={() => deleteById(id)}>삭제</button>
      </div>
    </div>
  );
};

export default MovieItem;
