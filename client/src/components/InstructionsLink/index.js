import React from "react";
import { Link } from "react-router-dom";

function InstructionsLink() {
  return (
    <Link to="/instructions">
      <span className="wait">Wait, how do I play?</span>
    </Link>
  )
}

export default InstructionsLink;