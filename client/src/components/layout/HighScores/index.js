import React from 'react';
import StartBtn from '../../StartBtn'
import HighScoreTable from '../../HighScoreTable';
import Game from '../Game'
import { Link, Route } from 'react-router-dom'

const HighScores = () => {
	return (
		<section className="highScores">
			<div className="row">
				<h1>HIGH SCORES</h1>
				<hr />
				<HighScoreTable />
				<p className="start-btn">
					<Route exact path="/play" component={Game} />
					<Link to="/play"><StartBtn subText={'(Back to Start)'} buttonText={'OK Lets Play'} /></Link>
				</p>
			</div>
		</section>
	);
};

export default HighScores;
