import React from 'react';

const GameOver = () => {
	return (
		<div className="game-over">
			<h2>Game Over &#x1F61E;</h2>
			<p>bootca....uhh..HackaMole say:</p>
			<p>Your session has expired, please log in again.</p>
			<p className="buttons">
				<button className="play-again">Play Again</button>
				<button className="submit-score">Submit Score</button>
			</p>
		</div>
	);
};

export default GameOver;
