import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import BodyInfo from "./pages/BodyInfo";
import RatePage from "./pages/RatePage";
import MainPage from "./pages/MainPage";
import Priority from "./pages/Priority";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Route path="/main" component={MainPage} exact />
        <Route path="/rate" component={RatePage} exact />
        <Route path="/body-info" component={BodyInfo} exact />
        <Route path="/priority" component={Priority} exact />
      </div>
    </div>
  );
}

export default App;
