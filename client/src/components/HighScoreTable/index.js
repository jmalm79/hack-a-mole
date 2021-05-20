import React, { useEffect, useState } from 'react';
import API from '../../utils/API';

function HighScoreTable() {
	const [
		highscores,
		setHighscores
	] = useState([]);
	useEffect(() => {
		loadHighscores();
	}, []);
	function loadHighscores() {
		API.getHighscores()
			.then((res) => {
				console.log(res.data);
				let sorted = res.data.sort(function (score1, score2) {
					let user1 = score1.score;
					let user2 = score2.score;

					if (user1 > user2) {
						return -1;
					}
					else {
						return 1;
					}
				});
				return sorted;
			})
			.then((sorted) => setHighscores(sorted))
			.catch((err) => console.log(err));
	}
	const getGrade = (score) => {
		if (score < 60) { return "F" } else
			if (score >= 60 && score < 70) { return "D" } else
				if (score >= 70 && score < 80) { return "C" } else
					if (score >= 80 && score < 90) { return "B" } else
						if (score >= 90 && score < 100) { return "A" } else
							if (score >= 100) { return "A+" }
	}

	return (
		<table>
			<tbody>
				<tr className="table-header">
					<th>Position</th>
					<th>Name</th>
					<th>Central Grading</th>
					<th>Score</th>
				</tr>
				{highscores.map((highscore, index) => (
					<tr className="score-row">
						<td className="position">{index + 1}</td>
						<td className="name">{highscore.name}</td>
						<td className="grade">{getGrade(highscore.score)}</td>
						<td className="score">{highscore.score}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default HighScoreTable;
