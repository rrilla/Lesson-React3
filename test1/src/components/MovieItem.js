import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardBodyS = styled.div`
  padding-left: 30px;
`;

const CardS = styled.div`
  height: 500px;
  border: 1px solid rgb(197, 197, 197);
  border-radius: 10px;
  box-shadow: 1px 1px 0px 0px rgb(54, 53, 53);
`;

const ButtonS = styled.button`
  color: white;
  width: 70px;
  height: 30px;
  background-color: red;
  box-shadow: 1px 1px 0px 0px rgb(167, 111, 111);
`;

const ImgS = styled.img`
  width: 100%;
  height: 300px;
`;

const MovieItem = (props) => {
  const { title, rating, id, medium_cover_image } = props.movie;
  const deleteById = props.deleteById;

  return (
    <CardS>
      <ImgS src={medium_cover_image} alt="" />

      <CardBodyS>
        <h4 class="card-title">{title}</h4>
        <p class="card-text">{rating}</p>
        <Link to={"/detail/" + id}>
          <ButtonS>상세보기</ButtonS>{" "}
        </Link>
        <ButtonS onClick={() => deleteById(id)}>삭제</ButtonS>
      </CardBodyS>
    </CardS>
  );
};

export default MovieItem;
