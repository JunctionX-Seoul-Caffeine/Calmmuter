import React from "react";
import "./App.scss";
import BodyInfo from "./pages/BodyInfo";
import RatePage from "./pages/RatePage";
import MainPage from "./pages/MainPage";
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
  return (
    <div className="App">
      <div className="wrapper">
        <Router history={history}>
          <Route
            render={({ location }) => (
              <TransitionGroup className="transitionGroup">
                <CSSTransition
                  key={location.pathname}
                  classNames={classNames}
                  timeout={200}
                >
                  <Switch location={location}>
                    <Route path="/main" component={MainPage} exact />
                    <Route path="/rate" component={RatePage} exact />
                    <Route path="/body-info" component={BodyInfo} exact />
                    <Route path="/priority" component={Priority} exact />
                    <Route path="/" component={StartPage} exact />
                    <Route
                      path="/ask-body-info"
                      component={AskBodyInfoPage}
                      exact
                    />
                    <Route
                      path="/your-detail"
                      component={YourDetailPage}
                      exact
                    />
                    <Route path="/basic-info" component={BasicInfo} exact />
                    <Route
                      path="/complete-registration"
                      component={CompleteRegistrationPage}
                      exact
                    />
                    <Route path="/emergency" component={Emergency} exact />
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
