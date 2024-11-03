import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Ifelse from "./components/Ifelse";
import AndOperator from "./components/AndOperator";
import Switch from "./components/Switch";
import UseMemo from "./components/UseMemo";

function App() {
  const props = {
    fname: "jeevan",
    lname: "s",
  };

  return (
    <>
      <Navbar {...props} />
      <Ifelse />
      <AndOperator />
      <Switch />
      <UseMemo />
    </>
  );
}

export default App;
