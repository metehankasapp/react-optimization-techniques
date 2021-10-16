import React from "react";

const MyParagraph = (props) => {
  console.log("paragraph output");
  return <div>{props.children}</div>;
};

export default MyParagraph;
