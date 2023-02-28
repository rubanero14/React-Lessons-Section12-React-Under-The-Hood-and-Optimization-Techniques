import React, { useState } from "react";
import Button from "./components/UI/Button/Button";

import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  const [paragraphIsVisible, setParagraphIsVisible] = useState(false);

  console.log("App RUNNING");

  // This is shorthand for toggling or inversing previous state. equivalent to `return paragraphIsVisible = !paragraphIsVisible`;
  const toggleParagraphVisible = () => {
    // setParagraphIsVisible(!paragraphIsVisible);

    // This is another way of toggling using previous state snapshot using callback fn and simply toggling it
    setParagraphIsVisible((prevParagraphState) => !prevParagraphState);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={paragraphIsVisible} />
      <Button onClick={toggleParagraphVisible}>
        Set {paragraphIsVisible ? "No Show" : "Showtime"}
      </Button>
    </div>
  );
}

export default App;
