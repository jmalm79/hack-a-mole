import './App.css';
import React, { useState, useEffect } from "react";
import Timer from "./components/Timer";
import StartBtn from "./components/StartBtn";
import Footer from "./components/Footer";
import Header from "./components/Header";

// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   Redirect,
//   useLocation
// } from "react-router-dom";

function App() {
  const [timer, setTimer ] = useState(60);
  const [playing, setPlaying ] = useState([false]);

  const handleStartBtn = event => {
    setTimer(60);
    setPlaying(true);
    setTimeout(() => setTimer(timer-1), 1000)
  }

  useEffect(() => {
    if (timer > 0 && playing === true) {
      setTimeout(() => setTimer(timer-1), 1000)
    }
    else {
      setTimer(timer);
    }
    }, [timer])

  return ( 
     <div>
      <Header /> 
      <StartBtn handleStartBtn={handleStartBtn} />
      <Timer time={timer}/>
      <p>Test :)</p>
      <Footer />
    </div>
 
  );
}

export default App;
