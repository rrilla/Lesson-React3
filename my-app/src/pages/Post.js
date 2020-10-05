import React from "react";

const Post = (props) => {
  console.log(props);
  console.log(props.match.params.id);
  return (
    <div>
      <h1>Post</h1>
      <hr />
    </div>
  );
};

export default Post;
