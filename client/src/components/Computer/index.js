import React from 'react';
import './style.css';
import ComputerImage from './../../images/computer.png';

function Computer(props) {
	return (
		<div className="box game-square">
			<div className="clickable-game-object">
				<div className="backdrop">
					{/* this will be an empty div that will be the backdrop. This will be black, pink or yellow. */}
				</div>
				{props.children}
				<img
					className="computer"
					src={ComputerImage}
					alt="Computer which is the foreground of the play square."
				/>
			</div>
		</div>
	);
}

export default Computer;
