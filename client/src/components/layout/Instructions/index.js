import React from 'react';

const Instructions = () => {
	return (
		<section className="instructions">
			<div className="row">
				<h1>Instructions</h1>
				<p>
					This will be a brief description about this game and below we will have a nice list about the rules
					and how the game works. But I am not going to write that right now for two reasons:
				</p>

				<ol>
					<li>Rules and gameplay isn't set yet.</li>
					<li>I don't care.</li>
				</ol>

				{/* here we will have the class checkin component that will take someone to the start game screen */}
			</div>
		</section>
	);
};

export default Instructions;