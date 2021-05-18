import React, { useState, useEffect } from "react";
import './style.css';

// import insult api
// import API from "../../utils/API";

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
/*   // component's initial state
  const [insults, setInsults] = useState([])

  // grabs insults from API and sets state
  useEffect(() => {
    loadInsults()
  }, [])

  function loadInsults() {
    API.getInsults()
      .then(res => 
        setInsults(res.data)
      )
    .catch(err => console.log(err));
  }
  console.log(insults)

	// text-to-speech function, comment out entire function to avoid being insulted
	setInterval(function() {

		// choose a random insult
		var insult = insults[Math.floor(Math.random() * insults.length)];
    console.log(insults)
    console.log(insult.content)

		// text to speech declared here
		var msg = new SpeechSynthesisUtterance();
		msg.text = insult.content;

    // text-to-speech call
    window.speechSynthesis.speak(msg);
  }, 20000);   // Interval set to 10 seconds, change to hear insults faster for testing  */

	return (
		<div className="countdown">
			<p>Time Remaining</p>
			<span className="timer">{props.time}</span>
		</div>
	);
}

export default Timer;
