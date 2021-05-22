import React from "react";
import "./App.css";
import StatusBar from "./components/StatusBar";
import BodyInfo from "./pages/BodyInfo";
import StarPage from "./pages/StarPage";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Route path="/rate" component={StarPage} exact />
      </div>
    </div>
  );
}

export default App;
