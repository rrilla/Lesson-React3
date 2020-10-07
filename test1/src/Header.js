import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UlS = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  border: 1px solid red;
  background-color: black;
  text-align: center;
`;

const LiS = styled.li``;

const LinkS = styled(Link)`
  color: white;
  font-size: 50px;
`;

const Header = () => {
  return (
    <UlS>
      <LiS>
        <LinkS to="/add">영화등록</LinkS>
      </LiS>
      <LiS>
        <LinkS to="/">영화목록</LinkS>
      </LiS>
    </UlS>
  );
};

export default Header;
