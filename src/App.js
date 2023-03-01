import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";

import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  const [paragraphIsVisible, setParagraphIsVisible] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("App RUNNING");

  // This is shorthand for toggling or inversing previous state. equivalent to `return paragraphIsVisible = !paragraphIsVisible`;
  // Notice that the fn below have been wrapped by useCallback hook, the purpose of the hook is to ensure to save the wrapped fn doesn't need re-rendering or re-evaluated
  // and re-use it (only loaded once when page loads and the function is stored in React memory as same fn with same proverbial id hence no re-evaluation wont be happening) upon
  // component, state, props or context updates. This hook takes 2 arguements similar to useEffect hook, wher 1st arg is callback fn and 2nd is dependency array where
  // we pass related mutable props or state variables into dependency array
  const toggleParagraphVisible = useCallback(() => {
    // setParagraphIsVisible(!paragraphIsVisible);

    // Logic to enable paragraph toggle button
    if (allowToggle) {
      // This is another way of toggling using previous state snapshot using callback fn and simply toggling it
      setParagraphIsVisible((prevParagraphState) => !prevParagraphState);
    }
  }, [allowToggle]); // since only the function above returning a callback fn, hence no dependency passed into the array

  const enableToggle = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={paragraphIsVisible} />
      <Button onClick={enableToggle} disabled={allowToggle}>
        Enable Toogle Switch
      </Button>
      <Button onClick={toggleParagraphVisible} disabled={!allowToggle}>
        Set {paragraphIsVisible ? "No Show" : "Showtime"}
      </Button>
    </div>
  );
}

export default App;
