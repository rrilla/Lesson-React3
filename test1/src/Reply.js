import React from "react";
import "./App.css";

const Reply = ({ reply, fDelete }) => {
  return (
    <div>
      <div class="card-body">
        <h4 class="card-title">{reply.replyer}</h4>
        <p class="card-text">{reply.reply}</p>
        <button onClick={() => fDelete(reply.rno)}>삭제</button>
      </div>
    </div>
  );
};

export default Reply;
