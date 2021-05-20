import React from 'react';
import StartBtn from '../../StartBtn';
import { BrowserRouter as Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Game from './../Game'

const Instructions = () => {
	return (
		<section className="instructions">
			<div className="row">
				<h1>INSTRUCTIONS</h1>
				<p>
					Welcome to <span className="hackamole">HACKaMOLE!</span> Here you will find yourself in a safe space
					for students. A place to relax and unwind after a long hard day of Coding Bootcamp. Or more accurately, a
					safe haven from the constant barrage of new technologies dished out by the "Instructor". Or so we thought....{' '}
				</p>
				<p>
					Help us protect our space! All you have to do is stop the "Instructor" (Instructor = red background and sun glasses)
					from hacking their way in.
				</p>
				<p>Watch out for Heckles the class mascot! Typically Heckles spends his days insulting the instructor, but if you tempt him, he may unleash his insults on you!</p>
				<p>
					You will also see our Fearless "T/A" (T/A = yellow background) working to block open terminals. Try
					not to block his work!{' '}
				</p>

				<dl className="rules">
					<dt>Start Game</dt>
					<dd>Press the Start button to join the session.</dd>

					<dt>Game Play</dt>

					<dd>A count down timer will start, Hack (click) on each Instructor to gain 5 points, note: clicking on a T/A may result in lost points. </dd>


					<dt>Log your Score.</dt>
					<dd>Show off your highscore by logging your name.</dd>
				</dl>

				<p className="start-btn">
					<Route exact path="/play" component={Game} />
					<Link to="/play"><StartBtn subText={'(Back to Start)'} buttonText={'OK Lets Play'} /></Link>
				</p>
			</div>
		</section>
	);
};

export default Instructions;