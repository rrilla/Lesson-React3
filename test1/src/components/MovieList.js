import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../App.css";

const MovieList = (props) => {
  //   const CardBodyS = styled.div`
  //     padding-left: 30px;
  //   `;
  //   const CardTitleS = styled.div``;
  //   const CardTextS = styled.div``;
  //   const ButtonS = styled.button`
  //     color: white;
  //     width: 70px;
  //     height: 30px;
  //     background-color: red;
  //     box-shadow: 1px 1px 0px 0px rgb(167, 111, 111);
  //   `;
  //   const ImgS = styled.img`
  //     width: 100%;
  //     height: 300px;
  //   `;

  const { title, rating, id, medium_cover_image } = props.movie;
  const deleteById = props.deleteById;
  return (
    <div>
      <Link to={"/detail/" + id}>
        <img src={medium_cover_image} alt="" />
      </Link>
      <div class="card-body">
        <h4 class="card-title">{title}</h4>
        <p class="card-text">{rating}</p>
        <button onClick={() => deleteById(id)}>삭제</button>
      </div>
    </div>
  );
};

export default MovieList;
