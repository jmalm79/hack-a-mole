import React from 'react';
import StartBtn from '../../StartBtn';

const Instructions = () => {
	return (
		<section className="instructions">
			<div className="row">
				<h1>INSTRUCTIONS</h1>
				<p>
					This will be a brief description about this game and below we will have a nice list about the rules
					and how the game works. But I am not going to write that right now for two reasons:
				</p>

				<ol>
					<li>Rules and gameplay isn't set yet.</li>
					<li>I don't care.</li>
				</ol>
				<dl className="rules">
					<dt>Rules and gameplay isn't set yet.</dt>
					<dd>(just don't do it...)</dd>

					<dt>I don't care.</dt>
					<dd>(What do you mean? An African or European swallow?)</dd>

					<dt>Why did the chicken cross the road?</dt>
					<dd>(To get to the other side)</dd>
				</dl>

				<p className="start-btn">
					<StartBtn subText={'(Back to Start)'} buttonText={'OK Lets Play'} />
				</p>
			</div>
		</section>
	);
};

export default Instructions;
