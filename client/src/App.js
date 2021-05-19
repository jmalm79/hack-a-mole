import './App.css';
import React, { useState, useEffect } from 'react';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Game from './components/layout/Game';
import HighScores from './components/layout/HighScores';
import Instructions from './components/layout/Instructions';
import Share from "./components/Share";
import NewHighScore from './components/Form';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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

			<Router>
				<Header />

				<Switch>
					<Route exact path="/" component={Game} />

					<Route exact path="/play" component={Game} />

					<Route exact path="/high-scores" component={HighScores} />

					<Route exact path="/instructions" component={Instructions} />

					<Route exact path="/share" component={Share} />
				</Switch>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
