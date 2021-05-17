import React from "react";
import "./style.css";
import StartBtn from "../StartBtn";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function CheckIn(props) {
  return (
    <span {...props} role="button" tabIndex="0">
      CLASS CHECK-IN
      <StartBtn />
    </span>
  );
}

export default CheckIn;
