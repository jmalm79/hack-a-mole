import * as React from 'react';
import { render } from 'react-dom';

import "./style.css";

// text to speech
var msg = new SpeechSynthesisUtterance();
msg.text = "Sucks to suck";

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

  window.speechSynthesis.speak(msg);
  
  return(
    <div>
      <p>Countdown: {props.time}</p>
      
    </div>
  )
}

export default Timer;