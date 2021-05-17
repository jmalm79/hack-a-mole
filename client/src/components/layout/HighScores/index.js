import React from 'react';

const HighScores = () => {
	return (
		<section className="high-scores">
			<div className="row">
				<h1>High Scores</h1>
				<hr />
				<table>
					<tr className="table-header">
						<th>Position</th>
						<th>Name</th>
						<th>Score</th>
					</tr>
					<tr className="score-row">
						<td className="position">1</td>
						<td className="name">Irox</td>
						<td className="score">345</td>
					</tr>
					{/* the above table row will be replaced by a component that we feed props, and in this file we are going to map over that component. We should also be taking in our high scores API data into this file. We could auto call the data in the useEffect */}
				</table>
			</div>
		</section>
	);
};

export default HighScores;
