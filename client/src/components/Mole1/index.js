import React from 'react';
import './style.css';
import GaryHead from '../../images/garyHead.png';

function Mole1(props) {
	return (
		<div className="mole1" id={props.id} index={props.index} onClick={props.handleClick1}>
			<img data-index={props.index} src={GaryHead} alt="Silly head of Gary, our instructor" />
		</div>
	);
}

export default Mole1;
