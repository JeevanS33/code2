import React from "react";

function Ifelse() {
  let result;
  if (2 > 1) {
    result = "yes";
  } else {
    result = "no";
  }
  return <div>{result}</div>;
}

export default Ifelse;
