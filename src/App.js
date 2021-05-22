import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import BodyInfo from "./pages/BodyInfo";
import RatePage from "./pages/RatePage";
import MainPage from "./pages/MainPage";
import Priority from "./pages/Priority";
import StartPage from "./pages/StartPage";
import AskBodyInfoPage from "./pages/AskBodyInfoPage";
import CompleteRegistrationPage from "./pages/CompleteRegistrationPage";


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Route path="/main" component={MainPage} exact />
        <Route path="/rate" component={RatePage} exact />
        <Route path="/body-info" component={BodyInfo} exact />
        <Route path="/priority" component={Priority} exact />
        <Route path="/" component={StartPage} exact />
        <Route path="/ask-body-info" component={AskBodyInfoPage} exact />
        <Route path="/complete-registration" component={CompleteRegistrationPage} exact />
      </div>
    </div>
  );
}

export default App;
