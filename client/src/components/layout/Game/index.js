import React from 'react';
import GameGrid from './../../GameGrid';

const Game = () => {
	return (
		<section className="home">
			<div className="row">
				<div className="header">
					<h1>HACKaMOLE</h1>

					<div className="welcome">{/* class check-in component, but on this page starts the game */}</div>

					{/* thinking we can hide the welcome div and show this div when the game starts */}
				</div>
				<section className="game-board">
					<GameGrid />
				</section>
			</div>
		</section>
	);
};

export default Game;
