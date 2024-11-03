import React from "react";

function Switch() {
  let result = 2;
  let output;

  switch (true) {
    case result > 1:
      output = "yes";
      break;
    default:
      output = "no";
  }

  return <div>{output}</div>;
}

export default Switch;
