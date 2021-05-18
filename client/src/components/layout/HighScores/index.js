import React from 'react';
import HighScoreTable from '../../HighScoreTable'

const HighScores = () => {
	return (
		<section className="high-scores">
			<div className="row">
				<h1>HIGH SCORES</h1>
				<hr />
			<HighScoreTable />
			</div>
		</section>
	);
};

export default HighScores;
