import React from "react";
import './style.css';

// function Timer() {
//   const [counter, setCounter] = React.useState(60);

//   React.useEffect(() => {
//     counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
//   }, [counter]);

//   return (
//     <div className="Timer">
//       <div>Countdown: {counter}</div>
//     </div>
//   );
// }

// const rootElement = document.getElementById('root');
// render(<Timer />, rootElement);

function Timer(props) {
	return (
		<div className="countdown">
			<p>Time Remaining</p>
			<span className="timer">{props.time}</span>
		</div>
	);
}

export default Timer;
