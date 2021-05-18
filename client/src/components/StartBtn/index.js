import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

function StartBtn(props) {
	return (
		<button className="start" onClick={props.handleStartBtn}>
			<FontAwesomeIcon icon={faGamepad} />
			{props.buttonText}
			<br />
			<span>(Start the Game)</span>
		</button>
	);
}

export default StartBtn;
