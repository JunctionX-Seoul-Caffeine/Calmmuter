import React from "react";
import "./App.css";
import StatusBar from "./components/StatusBar";
import BodyInfo from "./pages/BodyInfo";
import StarPage from "./pages/StarPage";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <StarPage />
      </div>
    </div>
  );
}

export default App;
