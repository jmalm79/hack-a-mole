import React from 'react';

const Game = () => {
	return (
		<section className="home">
			<div className="row">
				<div className="header">
					<h1>HACKaMOLE</h1>

					<div className="welcome">{/* class check-in component, but on this page starts the game */}</div>

					{/* thinking we can hide the welcome div and show this div when the game starts */}
					<div className="game-running">
						<h3>
							<span>SCORE:</span> 255
						</h3>
						<span className="timer" />
					</div>
				</div>
				<section className="game-board">
					{/* this is a game board square */}
					<div className="game-square" dataPosition={1}>
						<div className="clickable-game-object">
							{/* this will be the head */}
							<div className="backdrop">
								{/* this will be an empty div that will be the backdrop. This will be black, pink or yellow. */}
							</div>
						</div>
					</div>
					{/* end of a board square */}
				</section>
			</div>
		</section>
	);
};

export default Game;
