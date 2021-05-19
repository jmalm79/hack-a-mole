import React from 'react';
import './style.css';
import GageHead from './../../images/gageHead.png';

function Mole1(props) {
	return (
		<div className="mole2" id={props.id} index={props.index} onClick={props.handleClick2}>
			<img data-index={props.index} src={GageHead} alt="Silly head of our TA, hit him and lose points" />
		</div>
	);
}

export default Mole1;
