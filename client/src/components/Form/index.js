import React, { useState } from 'react';
import API from '../../utils/API';
import { Link, useHistory } from 'react-router-dom'

function AddHighScore(props) {
	const [formObject, setFormObject] = useState({});

	let history = useHistory();

	const redirect = () => {
		history.push('/high-scores')
	}

	function handleInputChange(event) {
		const { name, value } = event.target;
		setFormObject({ ...formObject, [name]: value });
	}

	function handleFormSubmit(event) {
		console.log(props.score)
		event.preventDefault();
		if (formObject.name) {
			console.log("test")
			API.newHighscore({
				name: formObject.name,
				score: props.score
			}).catch((err) => console.log(err));
			redirect();
		}
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
			<Link to="/high-scores">

				<button
					className={'btn submit'}
					type="submit"
					disabled={!(formObject.name)}
					onClick={handleFormSubmit}
				>
					Save
			</button>

			</Link>

		</form>
	);
}

export default AddHighScore;
