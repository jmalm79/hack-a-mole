import React from "react";
import './style.css';

function Timer(props) {
	return (
		<div className="countdown">
			<p>Time Remaining</p>
			<span className="timer">{props.time}</span>
		</div>
	);
}

export default Timer;
