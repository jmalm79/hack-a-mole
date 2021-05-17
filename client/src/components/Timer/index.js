import * as React from 'react';
import { render } from 'react-dom';

import "./style.css";

// import insult api
/* import axios from "axios";

const getInsults = async () => {
  const data = await axios.get("/api/phrases")
  console.log(data)
  return data
}

const insults = getInsults();
console.log(insults) */

// import './styles.css';

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

  // text-to-speech function, comment out entire function to avoid being insulted
/*   setInterval(function() {

    // // choose a random insult
    // var insult = insults[Math.floor(Math.random() * insults.length)];
    // console.log(insult.data.content)
    
    // // text to speech declared here
    // var msg = new SpeechSynthesisUtterance();
    // msg.text = insult.data.content
    
    // // text-to-speech call
    // window.speechSynthesis.speak(msg);
  }, 100000);   // Interval set to 10 seconds, change to hear insults faster for testing */

  return(
    <div>
      <p>Countdown: {props.time}</p>
      
    </div>
  )
}

export default Timer;