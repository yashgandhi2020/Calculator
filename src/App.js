import React from "react";
import Row from "./row";
import "./App.css";

function App() {
  const r0 = ["D", "%", "x^2", "/"];
  const r1 = ["7", "8", "9", "*"];
  const r2 = ["4", "5", "6", "-"];
  const r3 = ["1", "2", "3", "+"];
  const r4 = ["C", "0", ".", "="];

  return (
    <div className="App">
      <div className="calculator">
        <div
          className="row screen"
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1>Calculator</h1>
        </div>
        <div className="row scal screen">
          <h1 id="cal">0</h1>
        </div>
        <Row className="btn" value={r0} />
        <Row className="btn" value={r1} />
        <Row className="btn" value={r2} />
        <Row className="btn" value={r3} />
        <Row className="btn" value={r4} />
      </div>
    </div>
  );
}

export default App;
