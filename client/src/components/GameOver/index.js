import React, { useState, useEffect } from 'react';
import AddHighScore from '../Form';

const GameOver = (props) => {
	const [
		submit,
		setSubmit
	] = useState(false);

	function HandleSubmit() {
		setSubmit(true);
	}

	return (
		<div className="game-over">
			<h2>Game Over &#x1F61E;</h2>
			<p>bootca....uhh..HackaMole say:</p>
			<p>Your session has expired, please log in again.</p>
			<p className="buttons">
				<button className="play-again btn" onClick={props.PlayAgain}>
					Play Again
				</button>
				<button className="submit-score btn" onClick={HandleSubmit}>
					Submit Score
				</button>
			</p>
			{submit === true && <AddHighScore score={props.score} PlayAgain={props.PlayAgain} />}
		</div>
	);
};

export default GameOver;
