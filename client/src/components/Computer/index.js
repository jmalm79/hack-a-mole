import React from "react";
import "./style.css";

function Computer(props) {
    return(
        <div className="box">
            {props.children}
        </div>
    )
}

export default Computer;