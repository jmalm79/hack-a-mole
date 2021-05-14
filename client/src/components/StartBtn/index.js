import React from "react";
import "./style.css";

function StartBtn(props) {
    return(
        <button onClick={props.handleStartBtn}>Start Game</button>
    )
}

export default StartBtn;