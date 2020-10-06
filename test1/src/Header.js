import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>
        <Link to="/add">영화등록</Link>
      </h1>
      <h1>
        <Link to="/list">영화목록</Link>
      </h1>
    </div>
  );
};

export default Header;
