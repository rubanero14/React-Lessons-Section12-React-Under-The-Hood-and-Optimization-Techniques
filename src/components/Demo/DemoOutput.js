import React from "react";

import Paragraph from "./Paragraph";

const DemoOutput = (props) => {
  console.log("DemoOutput RUNNING");
  return <Paragraph>{props.show ? "Its Showtime!!!" : "No Show!!!"}</Paragraph>;
};

// React.memo() is a optimization method which takes a component as arguement and ensure to only to re-render the component when props of this component changes in value
// even when the parent of this component re-renders. This method is only useful when have large sub-component tree, otherwise this method has its own performance costs
// where React compares previous props value with new one on each re-render and stores a snapshot of previous props for re-rendering evaluation
export default React.memo(DemoOutput);
