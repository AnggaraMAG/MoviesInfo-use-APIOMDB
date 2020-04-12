import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/layout/Header";
import Info from "./components/layout/Info";
import Landing from "./components/home/Landing";
import Movie from "./components/home/Movie";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/movie/:id" component={Movie} />
        <Info />
      </div>
    </Router>
  );
}

export default App;
