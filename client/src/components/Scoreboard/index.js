import React from "react";
import "./style.css";

function Scoreboard(props) {
    return(
        <h3>Score: {props.score}</h3>
    )
}

export default Scoreboard;