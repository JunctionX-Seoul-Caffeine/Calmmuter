import React, { useState } from "react";
import "./App.scss";
import BodyInfo from "./pages/BodyInfo";
import RatePage from "./pages/RatePage";
import MainPage from "./pages/MainPage";
import MatchPage from "./pages/MatchPage";
import Priority from "./pages/Priority";
import StartPage from "./pages/StartPage";
import AskBodyInfoPage from "./pages/AskBodyInfoPage";
import BasicInfo from "./pages/BasicInfo";
import CompleteRegistrationPage from "./pages/CompleteRegistrationPage";
import Emergency from "./pages/Emergency";
import YourDetailPage from "./pages/YourDetailPage";
import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import InputDestination from "./pages/InputDestination";

const history = createBrowserHistory();

const pageTrans = "trans";
const classNames = {
  appear: `${pageTrans} appear`,
  appearActive: `${pageTrans} appear active`,
  appearDone: `${pageTrans} appear done`,
  enter: `${pageTrans} enter`,
  enterActive: `${pageTrans} enter active`,
  enterDone: `${pageTrans} enter done`,
  exit: `${pageTrans} exit`,
  exitActive: `${pageTrans} exit active`,
  exitDone: `${pageTrans} exit done`,
};

function App() {
  const [destination, setDestination] = useState("");
  const [infoArr, setInfoArr] = useState([
    { content: "Speed" },
    { content: "Rapid acceleration" },
    { content: "Hard Barking" },
    { content: "Traffic rules observance" },
    { content: "Sharp turns" },
    { content: "Quick lane change" },
  ]);

  const [bodyInfoArr, setBodyInfoArr] = useState([
    {
      id: 1,
      content: "Motion Sickness",
      selected: false,
      src: require("./assets/image.png"),
    },
    {
      id: 2,
      content: "Mental Illness",
      selected: true,
      src: require("./assets/image(1).png"),
    },
    {
      id: 3,
      content: "Disabled Arms",
      selected: false,
      src: require("./assets/image(2).png"),
    },
    {
      id: 4,
      content: "Disabled Legs",
      selected: false,
      src: require("./assets/image(3).png"),
    },
    {
      id: 5,
      content: "Pregnancy",
      selected: true,
      src: require("./assets/image(4).png"),
    },
    {
      id: 6,
      content: "Ear Problems",
      selected: false,
      src: require("./assets/image(5).png"),
    },
    {
      id: 7,
      content: "Patient",
      selected: false,
      src: require("./assets/image(6).png"),
    },
    {
      id: 8,
      content: "With Baby",
      selected: false,
      src: require("./assets/image(7).png"),
    },
  ]);

  return (
    <div className="App">
      <div className="wrapper">
        <Router history={history}>
          <Route
            render={({ location }) => (
              <TransitionGroup className="transitionGroup">
                <CSSTransition key={location.pathname} classNames={classNames} timeout={200}>
                  <Switch location={location}>
                    <Route
                      path="/main"
                      render={() => (
                        <MainPage setDestination={setDestination} />
                      )}
                      exact
                    />
                    <Route path="/rate" component={RatePage} exact />
                    <Route
                      path="/body-info"
                      render={() => (
                        <BodyInfo
                          bodyInfoArr={bodyInfoArr}
                          setBodyInfoArr={setBodyInfoArr}
                        />
                      )}
                      exact
                    />
                    <Route
                      path="/priority"
                      render={() => (
                        <Priority infoArr={infoArr} setInfoArr={setInfoArr} />
                      )}
                      exact
                    />
                    <Route path="/" component={StartPage} exact />
                    <Route path="/ask-body-info" component={AskBodyInfoPage} exact />
                    <Route path="/your-detail" component={YourDetailPage} exact />
                    <Route path="/basic-info" component={BasicInfo} exact />
                    <Route path="/complete-registration" component={CompleteRegistrationPage} exact />
                    <Route path="/emergency" component={Emergency} exact />
                    <Route
                      path="/input-destination"
                      render={() => (
                        <InputDestination
                          destination={destination}
                          infoArr={infoArr}
                          setInfoArr={setInfoArr}
                          bodyInfoArr={bodyInfoArr}
                          setBodyInfoArr={setBodyInfoArr}
                        />
                      )}
                    />
                    <Route path="/match" component={MatchPage} exact />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </Router>
      </div>
    </div>
  );
}

export default App;
