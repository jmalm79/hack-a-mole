import React from 'react';
import './style.css';
import GaryHead from '../../images/garyHead.png';

function Mole1(props) {
	return (
		<div className="mole1" id={props.id} onClick={props.handleClick1}>
			<img src={GaryHead} alt="Silly head of Gary, our instructor" />
		</div>
	);
}

export default Mole1;
