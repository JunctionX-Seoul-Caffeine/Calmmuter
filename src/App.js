import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import StatusBar from "./components/StatusBar";
import BodyInfo from "./pages/BodyInfo";
import RatePage from "./pages/RatePage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Route path="/" component={MainPage} exact />
        <Route path="/rate" component={RatePage} exact />
      </div>
    </div>
  );
}

export default App;
