import React from "react";

function navbar(props) {
  return (
    <h1>
      Hello, {props.fname} {props.lname}
    </h1>
  );
}

export default navbar;
