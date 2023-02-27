import React, { useState } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";

function App() {
  const [paragraphIsVisible, setParagraphIsVisible] = useState(false);

  console.log("APP IS RUNNING...");

  // This is shorthand for toggling or inversing previous state. equivalent to `return paragraphIsVisible = !paragraphIsVisible`;
  const toggleParagraphVisible = () => {
    // setParagraphIsVisible(!paragraphIsVisible);

    // This is another way of toggling using previous state snapshot using callback fn and simply toggling it
    setParagraphIsVisible((prevParagraphState) => !prevParagraphState);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {paragraphIsVisible && <p>Paragraph is visible!</p>}
      <Button onClick={toggleParagraphVisible}>
        {paragraphIsVisible ? "Hide" : "Show"} Paragraph
      </Button>
    </div>
  );
}

export default App;
