import './App.css';
import React from 'react';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Game from './components/layout/Game';
import HighScores from './components/layout/HighScores';
import Instructions from './components/layout/Instructions';
import Share from "./components/Share";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
	return (
		<div>
			<Router>
				<Header />

				<Switch>
					<Route exact path="/" component={Game} />

					<Route exact path="/play" component={Game} />

					<Route exact path="/high-scores" component={HighScores} />

					<Route exact path="/instructions" component={Instructions} />

					<Route exact path="/share" component={Share} />
				</Switch>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
