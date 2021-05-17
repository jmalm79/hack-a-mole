import './App.css';
import React, { useState, useEffect } from "react";
import Computer from "./components/Computer";
import GameGrid from "./components/GameGrid";
import Timer from './components/Timer';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   Redirect,
//   useLocation
// } from "react-router-dom";

function App() {
  // const [timer, setTimer ] = useState(10);
  // const [playing, setPlaying ] = useState(false);

  // const handleStartBtn = event => {
  //   if (playing === false) {
  //     setTimer(10);
  //     setPlaying(true);
  //     setTimeout(() => setTimer(timer-1), 1000)
  //   }
  // }

  // const handleClick1 = event => {
  //   console.log(event.target);
  // }

  // useEffect(() => {
  //   if (timer > -1 && playing === true) {
  //     setTimeout(() => setTimer(timer-1), 1000)
  //   }
  //   else {
  //     setTimer(10);
  //     //other end game logic, reactions here
  //     setPlaying(false);
  //   }
  //   }, [timer])

  return ( 
     <div>
        <Header />
        <p>Test :)</p>
        <GameGrid/>
        <Footer />
      </div>
  )

}


export default App;
