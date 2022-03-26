import React, { useState } from "react";
import "./App.css";
import ProbOne from "./Prob1";
import ProbTwo from "./Prob2";

function App() {
  const [asses, setAssess] = useState(0);
  const back = () => {
    setAssess(0);
  };
  return (
    <div className="App">
      {asses === 0 && (
        <div className="frontPage">
          <button
            type="button"
            className="btn btn-info"
            onClick={() => setAssess(1)}
          >
            <b> Assignment 1 </b>
          </button>
          <button
            type="button"
            className="btn btn-info"
            onClick={() => setAssess(2)}
          >
            <b> Assignment 2 </b>
          </button>
        </div>
      )}
      {asses === 1 && <ProbOne onClickBack={back} />}
      {asses === 2 && <ProbTwo onClickBack={back} />}
    </div>
  );
}

export default App;
