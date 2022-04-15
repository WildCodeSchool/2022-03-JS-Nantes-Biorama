import React from "react";
// import axios from "axios";

import Header from "./Header";
import Content from "./Content";
import Slider from "./components/Slider";

import "./App.css";

function App() {
  /* const getData = () => {
    axios
      .get("https://opendata.agencebio.org/api/gouv/operateurs/")
      .then((response) => console.log(response));
  };
  getData(); */
  return (
    <div className="App">
      <Header />
      <Slider />
      <Content />
    </div>
  );
}

export default App;
