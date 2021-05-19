import React, { useState, useEffect } from 'react';
import Computer from '../Computer';
import Timer from '../Timer';
import StartBtn from '../StartBtn';
import '../Mole1';
import Mole2 from '../Mole2';
import Mole1 from '../Mole1';
import Scoreboard from "../Scoreboard";
import GameOver from '../GameOver';
import { BrowserRouter as Route } from "react-router-dom";
import InstructionsLink from "../InstructionsLink"
import Instructions from "../layout/Instructions"
// import insult api
import API from '../../utils/API';

function GameGrid(props) {

	const [moles, setMoles] = useState([false]);
	const [mole1, setMole1] = useState([false]);
	const [mole2, setMole2] = useState([false]);
	const [mole3, setMole3] = useState([false]);
	const [mole4, setMole4] = useState([false]);
	const [mole5, setMole5] = useState([false]);
	const [mole6, setMole6] = useState([false]);
	const [mole7, setMole7] = useState([false]);
	const [mole8, setMole8] = useState([false]);
	const [mole9, setMole9] = useState([false]);
	const [mole11, setMole11] = useState([false]);
	const [mole12, setMole12] = useState([false]);
	const [mole13, setMole13] = useState([false]);
	const [mole14, setMole14] = useState([false]);
	const [mole15, setMole15] = useState([false]);
	const [mole16, setMole16] = useState([false]);
	const [mole17, setMole17] = useState([false]);
	const [mole18, setMole18] = useState([false]);
	const [mole19, setMole19] = useState([false]);
	const [lastholes, setLastHoles] = useState({ idx1: 10, idx2: 10 });

    const [timer, setTimer ] = useState(20);
    const [playing, setPlaying ] = useState(false);
    const [score, setScore] = useState(0);
	const [insults, setInsults] = useState([]);
	const [gameover, setGameover] = useState(false);

	// grabs insults from API and sets state
	useEffect(() => {
		loadInsults();
	}, []);

	function loadInsults() {
		API.getInsults().then((res) => setInsults(res.data)).catch((err) => console.log(err));
	}

	function makeInsult() {
		var insult = insults[Math.floor(Math.random() * insults.length)];
		// console.log(insults)
		// console.log(insult.content)

		// text to speech declared here
		var msg = new SpeechSynthesisUtterance();
		msg.text = insult.content;

		// text-to-speech call
		window.speechSynthesis.speak(msg);
	}
	// let insultsInterval;

	// const startInsults = () => {
	// 	insultsInterval = setInterval(function makeInsults() {
	// 		// choose a random insult
	// 		var insult = insults[Math.floor(Math.random() * insults.length)];
	// 		// console.log(insults)
	// 		// console.log(insult.content)

	// 		// text to speech declared here
	// 		var msg = new SpeechSynthesisUtterance();
	// 		msg.text = insult.content;

	// 		// text-to-speech call
	// 		window.speechSynthesis.speak(msg);
	// 	}, 4000);
	// }

	const handleStartBtn = (event) => {
		if (playing === false) {
			setTimer(20);
			setScore(0);
			setPlaying(true);
			setTimeout(() => setTimer(timer - 1), 1000);
			// startInsults()
		}
	};

	function queso() {
		var msg = new SpeechSynthesisUtterance();
		msg.text = 'Queso';

		// text-to-speech call
		window.speechSynthesis.speak(msg);
	}

	function notGage() {
		var msg = new SpeechSynthesisUtterance();
		msg.text = "Don't delete Gage!";

		// text-to-speech call
		window.speechSynthesis.speak(msg);
	}

	const handleClick1 = (event) => {
		// console.log(event.target.dataset.index);
		let index = parseInt(event.target.dataset.index);
		// console.log(typeof(index));
		// setTimeout(() => setVariableMole(index, false), 10);
		setVariableMole(index, false);
		let newScore = score + 5;
		setScore(newScore);
		queso();
	};

	const handleClick2 = (event) => {
		// console.log(event.target);
		let index = parseInt(event.target.dataset.index);
		setVariableMole(index, false);
		let rando = Math.floor(Math.random() * 13 - 5);
		let newScore = score - rando;
		setScore(newScore);
		notGage();
	};

	useEffect(
		() => {
			if (timer > -1 && playing === true) {
				setTimeout(() => setTimer(timer - 1), 1000);
				// console.log(`Timer: ${timer} Playing: ${playing}`)
				setLastHoles(showMole(lastholes));
				if (timer % 4 === 0) {
					makeInsult();
				}
			}
			else {
				if (timer === -1) {
					setGameover(true);
				}
				setTimer(20);
				//other end game logic, reactions here
				setPlaying(false);
			}
		},
		[
			timer
		]
	);

	useEffect(
		() => {
			if (playing === false) {
				return;
				console.log(playing);
			}
			else if (playing === true) {
				startGame();
			}
		},
		[
			playing
		]
	);

	function randomTime(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	function randomMole() {
		let index = Math.floor(Math.random() * 9);
		return index;
	}

	function setVariableMole(idx, bool) {
		if (idx === 1) {
			setMole1(bool);
		}
		if (idx === 2) {
			setMole2(bool);
		}
		if (idx === 3) {
			setMole3(bool);
		}
		if (idx === 4) {
			setMole4(bool);
		}
		if (idx === 5) {
			setMole5(bool);
		}
		if (idx === 6) {
			setMole6(bool);
		}
		if (idx === 7) {
			setMole7(bool);
		}
		if (idx === 8) {
			setMole8(bool);
		}
		if (idx === 9) {
			setMole9(bool);
		}
		if (idx === 11) {
			setMole11(bool);
		}
		if (idx === 12) {
			setMole12(bool);
		}
		if (idx === 13) {
			setMole13(bool);
		}
		if (idx === 14) {
			setMole14(bool);
		}
		if (idx === 15) {
			setMole15(bool);
		}
		if (idx === 16) {
			setMole16(bool);
		}
		if (idx === 17) {
			setMole17(bool);
		}
		if (idx === 18) {
			setMole18(bool);
		}
		if (idx === 19) {
			setMole19(bool);
		}
	}

	function showMole(idxs) {
		let idx1 = randomMole();
		let idx2 = randomMole();
		// console.log(lastholes);
		// console.log(`idx1: ${idx1} idx2: ${idx2}`);
		if (idx1 === idxs.idx1 || idx2 === idxs.idx2) {
			// console.log('idx1 = idxs.idx1 or idx2 = idxs.idx2');
			return showMole(lastholes);
		}
		else if (idx1 === idxs.idx2 || idx2 === idxs.idx1) {
			// console.log('idx2 = idxs.idx1 or idx1 = idxs.idx2');
			return showMole(lastholes);
		}
		if (idx2 === idx1) {
			// console.log('idx2 = idx1');
			return showMole(lastholes);
		}
		else {
			setVariableMole(idx1 + 1, true);
			setTimeout(() => setVariableMole(idx1 + 1, false), randomTime(400, 1200));
			setTimeout(() => setVariableMole(idx2 + 11, true), randomTime(200, 500));
			setTimeout(() => setVariableMole(idx2 + 11, false), randomTime(1500, 2000));
		}
		return { idx1: idx1, idx2: idx2 };
	}

	function startGame() {
		// console.log('test');
		setTimeout(() => setLastHoles(showMole({ idx1: 10, idx2: 10 })), randomTime(50, 1000));
	}

	function PlayAgain() {
		setGameover(false);
	}

	return (
		<div className="game">
			<div className="game-running">
				<Scoreboard score={score} />

				<p className="start-btn">
					<StartBtn
						subText="(Start The Game)"
						buttonText="Check-In To Class"
						handleStartBtn={handleStartBtn}
					/>
					{/* TODO: This needs to match the other button at the bottom of scores */}
					<Route exact path="/instructions" component={Instructions} />
					<InstructionsLink />
				</p>
				<Timer time={timer} />
			</div>
			<div className="grid">
				<Computer className="computer">
					{mole1 === true && (
						<Mole1 id="mole1-1" index="1" startGame={props.startGame} handleClick1={handleClick1} />
					)}
					{mole11 === true && (
						<Mole2 id="mole2-1" index="11" startGame={props.startGame} handleClick2={handleClick2} />
					)}
					{/* <Mole1 id="mole1-1" startGame={props.startGame} handleClick1={props.handleClick1}/> */}
				</Computer>

				<Computer className="computer">
					{mole2 === true && (
						<Mole1 id="mole1-2" index="2" startGame={props.startGame} handleClick1={handleClick1} />
					)}
					{mole12 === true && (
						<Mole2 id="mole2-2" index="12" startGame={props.startGame} handleClick2={handleClick2} />
					)}
					{/* <Mole1 id="mole1-2" startGame={props.startGame} handleClick1={props.handleClick1}/> */}
				</Computer>

				<Computer className="computer">
					{mole3 === true && (
						<Mole1 id="mole1-3" index="3" startGame={props.startGame} handleClick1={handleClick1} />
					)}
					{mole13 === true && (
						<Mole2 id="mole2-3" index="13" startGame={props.startGame} handleClick2={handleClick2} />
					)}
					{/* <Mole1 id="mole1-3" startGame={props.startGame} handleClick1={props.handleClick1}/> */}
				</Computer>

				<Computer className="computer">
					{mole4 === true && (
						<Mole1 id="mole1-4" index="4" startGame={props.startGame} handleClick1={handleClick1} />
					)}
					{mole14 === true && (
						<Mole2 id="mole2-4" index="14" startGame={props.startGame} handleClick2={handleClick2} />
					)}
					{/* <Mole1 id="mole1-4" startGame={props.startGame} handleClick1={props.handleClick1}/> */}
				</Computer>

				<Computer className="computer">
					{mole5 === true && (
						<Mole1 id="mole1-5" index="5" startGame={props.startGame} handleClick1={handleClick1} />
					)}
					{mole15 === true && (
						<Mole2 id="mole2-5" index="15" startGame={props.startGame} handleClick2={handleClick2} />
					)}
					{/* <Mole1 id="mole1-5" startGame={props.startGame} handleClick1={props.handleClick1}/> */}
				</Computer>

				<Computer className="computer">
					{mole6 === true && (
						<Mole1 id="mole1-6" index="6" startGame={props.startGame} handleClick1={handleClick1} />
					)}
					{mole16 === true && (
						<Mole2 id="mole2-6" index="16" startGame={props.startGame} handleClick2={handleClick2} />
					)}
					{/* <Mole1 id="mole1-5" startGame={props.startGame} handleClick1={props.handleClick1}/> */}
				</Computer>

				<Computer className="computer">
					{mole7 === true && (
						<Mole1 id="mole1-7" index="7" startGame={props.startGame} handleClick1={handleClick1} />
					)}
					{mole17 === true && (
						<Mole2 id="mole2-7" index="17" startGame={props.startGame} handleClick2={handleClick2} />
					)}
					{/* <Mole1 id="mole1-5" startGame={props.startGame} handleClick1={props.handleClick1}/> */}
				</Computer>

				<Computer className="computer">
					{mole8 === true && (
						<Mole1 id="mole1-8" index="8" startGame={props.startGame} handleClick1={handleClick1} />
					)}
					{mole18 === true && (
						<Mole2 id="mole2-8" index="18" startGame={props.startGame} handleClick2={handleClick2} />
					)}
					{/* <Mole1 id="mole1-5" startGame={props.startGame} handleClick1={props.handleClick1}/> */}
				</Computer>

				<Computer className="computer">
					{mole9 === true && (
						<Mole1 id="mole1-9" index="9" startGame={props.startGame} handleClick1={handleClick1} />
					)}
					{mole19 === true && (
						<Mole2 id="mole2-9" index="19" startGame={props.startGame} handleClick2={handleClick2} />
					)}
					{/* <Mole1 id="mole1-5" startGame={props.startGame} handleClick1={props.handleClick1}/> */}
				</Computer>

				{gameover === true && <GameOver score={score} PlayAgain={PlayAgain}/>}
			</div>
		</div>
	);
}

export default GameGrid;
