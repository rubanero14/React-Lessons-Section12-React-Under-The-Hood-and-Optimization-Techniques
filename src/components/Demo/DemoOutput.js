import React from "react";

import Paragraph from "./Paragraph";

const DemoOutput = (props) => {
  console.log("DemoOutput RUNNING");
  return <Paragraph>{props.show ? "Its Showtime!!!" : "No Show!!!"}</Paragraph>;
};

export default DemoOutput;
