import React, { useState } from 'react';
import API from '../../utils/API';

function AddHighScore(props) {
	const [
		formObject,
		setFormObject
	] = useState({});

	function handleInputChange(event) {
		const { name, value } = event.target;
		setFormObject({ ...formObject, [name]: value });
	}

	function handleFormSubmit(event) {
		event.preventDefault();
		if (formObject.name && props.score) {
			API.newHighscore({
				name  : formObject.name,
				score : props.score
			}).catch((err) => console.log(err));
		}
	}

	function PlayAgain() {
		props.PlayAgain();
	}

	return (
		<form>
			<h3>
				Score: <span className={'score'}>{props.score}</span>
			</h3>
			<label className={'label'} htmlFor="name">
				Name <br />
				<input onChange={handleInputChange} placeholder="Name" type="text" name="name" />
			</label>

			<button
				className={'btn submit'}
				type="submit"
				disabled={!(formObject.name && props.score)}
				onClick={() => {
					handleFormSubmit();
					PlayAgain();
				}}
			>
				Save
			</button>
		</form>
	);
}

export default AddHighScore;
