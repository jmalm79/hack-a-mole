import React from 'react';

const Game = () => {
	return (
		<section className="home">
			<div className="row">
				<h1>HACKaMOLE</h1>
				{/* class check-in component, but on this page starts the game */}

				<section className="game-board">
					<div className="game-square" dataPosition={1}>
						<div className="clickable-game-object">
							{/* this will be the head */}
							<div className="backdrop">
								{/* this will be an empty div that will be the backdrop. This will be black, pink or yellow. */}
							</div>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
};

export default Game;
