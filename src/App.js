import React from "react";

import "./App.css";
import Header from "./components/layout/Header";
import Info from "./components/layout/Info";
// import Search from "./components/home/Search";
import Landing from "./components/home/Landing";

function App() {
  return (
    <div>
      <Header />
      <Landing />
      <Info />
    </div>
  );
}

export default App;
