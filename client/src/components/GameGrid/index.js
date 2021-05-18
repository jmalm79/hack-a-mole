import React, { useState, useEffect } from 'react';
import Computer from '../Computer';
import Timer from '../Timer';
import StartBtn from '../StartBtn';
import '../Mole1';
import Mole2 from '../Mole2';
import Mole1 from '../Mole1';
import Scoreboard from "../Scoreboard";
// import insult api
import API from "../../utils/API";

function GameGrid(props) {
	const [
		moles,
		setMoles
	] = useState([
		false
	]);
	const [
		mole1,
		setMole1
	] = useState([
		false
	]);
	const [
		mole2,
		setMole2
	] = useState([
		false
	]);
	const [
		mole3,
		setMole3
	] = useState([
		false
	]);
	const [
		mole4,
		setMole4
	] = useState([
		false
	]);
	const [
		mole5,
		setMole5
	] = useState([
		false
	]);
	const [
		mole6,
		setMole6
	] = useState([
		false
	]);
	const [
		mole7,
		setMole7
	] = useState([
		false
	]);
	const [
		mole8,
		setMole8
	] = useState([
		false
	]);
	const [
		mole9,
		setMole9
	] = useState([
		false
	]);
	const [
		mole11,
		setMole11
	] = useState([
		false
	]);
	const [
		mole12,
		setMole12
	] = useState([
		false
	]);
	const [
		mole13,
		setMole13
	] = useState([
		false
	]);
	const [
		mole14,
		setMole14
	] = useState([
		false
	]);
	const [
		mole15,
		setMole15
	] = useState([
		false
	]);
	const [
		mole16,
		setMole16
	] = useState([
		false
	]);
	const [
		mole17,
		setMole17
	] = useState([
		false
	]);
	const [
		mole18,
		setMole18
	] = useState([
		false
	]);
	const [
		mole19,
		setMole19
	] = useState([
		false
	]);
	const [
		lastholes,
		setLastHoles
	] = useState({ idx1: 10, idx2: 10 });
	// const [timeRemaining, setTime ] = useState(props.time);

    const [timer, setTimer ] = useState(10);
    const [playing, setPlaying ] = useState(false);
    const [score, setScore] = useState(0);
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

		const startInsults = () => {
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
			}, 6000);   // Interval set to 10 seconds, change to hear insults faster for testing 
		}

    const handleStartBtn = event => {
        if (playing === false) {
        setTimer(10);
        setScore(0);
        setPlaying(true);
        setTimeout(() => setTimer(timer-1), 1000)
				startInsults()
        }
    }

	const handleClick1 = (event) => {
		console.log(event.target);
		let newScore = score + 5;
		setScore(newScore);
	};

	const handleClick2 = (event) => {
		console.log(event.target);
		let newScore = score + 1;
		setScore(newScore);
	};

	useEffect(
		() => {
			if (timer > -1 && playing === true) {
				setTimeout(() => setTimer(timer - 1), 1000);
				// console.log(lastholes)
				setLastHoles(showMole(lastholes));
			}
			else {
				setTimer(10);
				//other end game logic, reactions here
				setPlaying(false);
			}
		},
		[
			timer
		]
	);

	// useEffect(() => {
	//     updateTime(props.time);
	//     console.log(timeRemaining);
	//     }, [props.time])

	// function updateTime(time) {
	//     setTime(time);
	// }

	useEffect(
		() => {
			if (playing === false) {
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

	// function showMole(lastIndex) {
	//     let idx = randomMole();
	//     if (idx === lastIndex) {
	//         return showMole(idx);
	//     }
	//     const moleArray = [...moles];
	//     moleArray[idx] = true;
	//     setMoles(moleArray);
	//     setTimeout(() => setMoles(revertArray(moleArray, idx)), randomTime(1000,2000));
	// }

	function showMole(idxs) {
		let idx1 = randomMole();
		let idx2 = randomMole();
		console.log(lastholes);
		console.log(`idx1: ${idx1} idx2: ${idx2}`);
		if (idx1 === idxs.idx1 || idx2 === idxs.idx2) {
			console.log('idx1 = idxs.idx1 or idx2 = idxs.idx2');
			return showMole(lastholes);
		}
		else if (idx1 === idxs.idx2 || idx2 === idxs.idx1) {
			console.log('idx2 = idxs.idx1 or idx1 = idxs.idx2');
			return showMole(lastholes);
		}
		if (idx2 === idx1) {
			console.log('idx2 = idx1');
			return showMole(lastholes);
		}
		else {
			if (idx1 === 0) {
				setMole1(true);
				setTimeout(() => setMole1(false), randomTime(1000, 2000));
			}
			if (idx1 === 1) {
				setMole2(true);
				setTimeout(() => setMole2(false), randomTime(1000, 2000));
			}
			if (idx1 === 2) {
				setMole3(true);
				setTimeout(() => setMole3(false), randomTime(1000, 2000));
			}
			if (idx1 === 3) {
				setMole4(true);
				setTimeout(() => setMole4(false), randomTime(1000, 2000));
			}
			if (idx1 === 4) {
				setMole5(true);
				setTimeout(() => setMole5(false), randomTime(1000, 2000));
			}
			if (idx1 === 5) {
				setMole6(true);
				setTimeout(() => setMole6(false), randomTime(1000, 2000));
			}
			if (idx1 === 6) {
				setMole7(true);
				setTimeout(() => setMole7(false), randomTime(1000, 2000));
			}
			if (idx1 === 7) {
				setMole8(true);
				setTimeout(() => setMole8(false), randomTime(1000, 2000));
			}
			if (idx1 === 8) {
				setMole9(true);
				setTimeout(() => setMole9(false), randomTime(1000, 2000));
			}
			if (idx2 === 0) {
				setTimeout(() => setMole11(true), randomTime(200, 500));
				setTimeout(() => setMole11(false), randomTime(1500, 2000));
			}
			if (idx2 === 1) {
				setTimeout(() => setMole12(true), randomTime(200, 500));
				setTimeout(() => setMole12(false), randomTime(1500, 2000));
			}
			if (idx2 === 2) {
				setTimeout(() => setMole13(true), randomTime(200, 500));
				setTimeout(() => setMole13(false), randomTime(1500, 2000));
			}
			if (idx2 === 3) {
				setTimeout(() => setMole14(true), randomTime(200, 500));
				setTimeout(() => setMole14(false), randomTime(1500, 2000));
			}
			if (idx2 === 4) {
				setTimeout(() => setMole15(true), randomTime(200, 500));
				setTimeout(() => setMole15(false), randomTime(1500, 2000));
			}
			if (idx2 === 5) {
				setTimeout(() => setMole16(true), randomTime(200, 500));
				setTimeout(() => setMole16(false), randomTime(1500, 2000));
			}
			if (idx2 === 6) {
				setTimeout(() => setMole17(true), randomTime(200, 500));
				setTimeout(() => setMole17(false), randomTime(1500, 2000));
			}
			if (idx2 === 7) {
				setTimeout(() => setMole18(true), randomTime(200, 500));
				setTimeout(() => setMole18(false), randomTime(1500, 2000));
			}
			if (idx2 === 8) {
				setTimeout(() => setMole19(true), randomTime(200, 500));
				setTimeout(() => setMole19(false), randomTime(1500, 2000));
			}
		}
		return { idx1: idx1, idx2: idx2 };
	}

	// function showMole() {
	//     let idx = randomMole();
	//     if (idx === 0) {
	//         setMole11(true);
	//         setTimeout(() => setMole1(false), randomTime(1000,2000));
	//     }
	//     if (idx === 1) {
	//         setMole12(true);
	//         setTimeout(() => setMole2(false), randomTime(1000,2000));
	//     }
	//     if (idx === 2) {
	//         setMole13(true);
	//         setTimeout(() => setMole3(false), randomTime(1000,2000));
	//     }
	//     if (idx === 3) {
	//         setMole14(true);
	//         setTimeout(() => setMole4(false), randomTime(1000,2000));
	//     }
	//     if (idx === 4) {
	//         setMole15(true);
	//         setTimeout(() => setMole5(false), randomTime(1000,2000));
	//     }
	//     if (idx === 5) {
	//         setMole16(true);
	//         setTimeout(() => setMole6(false), randomTime(1000,2000));
	//     }
	//     if (idx === 6) {
	//         setMole17(true);
	//         setTimeout(() => setMole7(false), randomTime(1000,2000));
	//     }
	//     if (idx === 7) {
	//         setMole18(true);
	//         setTimeout(() => setMole8(false), randomTime(1000,2000));
	//     }
	//     if (idx === 8) {
	//         setMole19(true);
	//         setTimeout(() => setMole9(false), randomTime(1000,2000));
	//     }
	// }

	// function revertArray(array, index) {
	//     const newArray = [...array];
	//     newArray[index] = false;
	//     return newArray;
	// }

	function startGame() {
		console.log('test');
		setTimeout(() => setLastHoles(showMole({ idx1: 10, idx2: 10 })), randomTime(50, 1000));
	}

	return (
		<div className="game">
			<div className="game-running">
				<Scoreboard score={score} />

				<p className="start-btn">
					<StartBtn handleStartBtn={handleStartBtn} />
					{/* TODO: This needs to match the other button at the bottom of scores */}
				</p>
				<Timer time={timer} />
			</div>
			<div className="grid">
				<Computer className="computer">
					{mole1 === true && <Mole1 id="mole1-1" startGame={props.startGame} handleClick1={handleClick1} />}
					{mole11 === true && <Mole2 id="mole2-1" startGame={props.startGame} handleClick2={handleClick2} />}
					{/* <Mole1 id="mole1-1" startGame={props.startGame} handleClick1={props.handleClick1}/> */}
				</Computer>

				<Computer className="computer">
					{mole2 === true && <Mole1 id="mole1-2" startGame={props.startGame} handleClick1={handleClick1} />}
					{mole12 === true && <Mole2 id="mole2-2" startGame={props.startGame} handleClick2={handleClick2} />}
					{/* <Mole1 id="mole1-2" startGame={props.startGame} handleClick1={props.handleClick1}/> */}
				</Computer>

				<Computer className="computer">
					{mole3 === true && <Mole1 id="mole1-3" startGame={props.startGame} handleClick1={handleClick1} />}
					{mole13 === true && <Mole2 id="mole2-3" startGame={props.startGame} handleClick2={handleClick2} />}
					{/* <Mole1 id="mole1-3" startGame={props.startGame} handleClick1={props.handleClick1}/> */}
				</Computer>

				<Computer className="computer">
					{mole4 === true && <Mole1 id="mole1-4" startGame={props.startGame} handleClick1={handleClick1} />}
					{mole14 === true && <Mole2 id="mole2-4" startGame={props.startGame} handleClick2={handleClick2} />}
					{/* <Mole1 id="mole1-4" startGame={props.startGame} handleClick1={props.handleClick1}/> */}
				</Computer>

				<Computer className="computer">
					{mole5 === true && <Mole1 id="mole1-5" startGame={props.startGame} handleClick1={handleClick1} />}
					{mole15 === true && <Mole2 id="mole2-5" startGame={props.startGame} handleClick2={handleClick2} />}
					{/* <Mole1 id="mole1-5" startGame={props.startGame} handleClick1={props.handleClick1}/> */}
				</Computer>

				<Computer className="computer">
					{mole6 === true && <Mole1 id="mole1-6" startGame={props.startGame} handleClick1={handleClick1} />}
					{mole16 === true && <Mole2 id="mole2-6" startGame={props.startGame} handleClick2={handleClick2} />}
					{/* <Mole1 id="mole1-5" startGame={props.startGame} handleClick1={props.handleClick1}/> */}
				</Computer>

				<Computer className="computer">
					{mole7 === true && <Mole1 id="mole1-7" startGame={props.startGame} handleClick1={handleClick1} />}
					{mole17 === true && <Mole2 id="mole2-7" startGame={props.startGame} handleClick2={handleClick2} />}
					{/* <Mole1 id="mole1-5" startGame={props.startGame} handleClick1={props.handleClick1}/> */}
				</Computer>

				<Computer className="computer">
					{mole8 === true && <Mole1 id="mole1-8" startGame={props.startGame} handleClick1={handleClick1} />}
					{mole18 === true && <Mole2 id="mole2-8" startGame={props.startGame} handleClick2={handleClick2} />}
					{/* <Mole1 id="mole1-5" startGame={props.startGame} handleClick1={props.handleClick1}/> */}
				</Computer>

				<Computer className="computer">
					{mole9 === true && <Mole1 id="mole1-9" startGame={props.startGame} handleClick1={handleClick1} />}
					{mole19 === true && <Mole2 id="mole2-9" startGame={props.startGame} handleClick2={handleClick2} />}
					{/* <Mole1 id="mole1-5" startGame={props.startGame} handleClick1={props.handleClick1}/> */}
				</Computer>
			</div>
		</div>
	);
}

export default GameGrid;
