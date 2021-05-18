import React from 'react';
import './style.css';
import GageHead from './../../images/gageHead.png';

function Mole1(props) {
	return (
		<div className="mole2" id={props.id} onClick={props.handleClick2}>
			<img src={GageHead} alt="Silly head of our TA, hit him and lose points" />
		</div>
	);
}

export default Mole1;
