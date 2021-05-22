import React from "react";
import "./App.css";
import StatusBar from "./components/StatusBar";
import BodyInfo from "./pages/BodyInfo";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <StatusBar />
        <BodyInfo />
      </div>
    </div>
  );
}

export default App;
