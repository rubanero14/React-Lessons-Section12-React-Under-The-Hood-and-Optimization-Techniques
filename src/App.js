import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";

import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  const [paragraphIsVisible, setParagraphIsVisible] = useState(false);

  console.log("App RUNNING");

  // This is shorthand for toggling or inversing previous state. equivalent to `return paragraphIsVisible = !paragraphIsVisible`;
  // Notice that the fn below have been wrapped by useCallback hook, the purpose of the hook is to ensure the wrapped fn doesn't need re-rendering or re-evaluated upon
  // component, state, props or context updates. This hook takes 2 arguements similar to useEffect hook, wher 1st arg is callback fn and 2nd is dependency array where
  // we pass related mutable props or state variables into dependency array
  const toggleParagraphVisible = useCallback(() => {
    // setParagraphIsVisible(!paragraphIsVisible);

    // This is another way of toggling using previous state snapshot using callback fn and simply toggling it
    setParagraphIsVisible((prevParagraphState) => !prevParagraphState);
  }, []); // since only the function above returning a callback fn, hence no dependency passed into the array

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
