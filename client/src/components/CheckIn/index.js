import React from 'react';
import './style.css';
import StartBtn from '../StartBtn';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function CheckIn(props) {
	return (
		<p {...props} role="button" tabIndex="0">
			<StartBtn buttonText={'Les Go'} />
			<br />
			{/* TODO:We need to get this route in order */}
			<a href="#" className="wait">
				WAIT! How do I play?
			</a>
		</p>
	);
}

export default CheckIn;
