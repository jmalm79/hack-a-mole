import React, { useState } from "react";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessKing, faHeart, faGamepad } from '@fortawesome/free-solid-svg-icons';
import Share from '../../Share';
import Logo from '../../../images/logo.png';
import HighScores from '../HighScores';
import Game from '../Game';
import Instructions from '../Instructions';
import { Switch, Route, Link } from 'react-router-dom';

function Header() {

	const [shareState, setShareState] = useState({
		visible: "false"
	});

	const handleVisibility = () => {
		if (shareState.visible === "false") {
			setShareState(({
				visible: "true"
			}))
		} else {
		setShareState(({
			visible: "false"
		}))}
	}

	return (
		<header>
			<Link to="/" className="logo">
				<img src={Logo} alt="This is heckles the mascot; He's tired of your crap." />
				<span>This is Heckles; he's tired of your crap.</span>
			</Link>
			<nav>
				<ul className="nav">
					<li className="play-game">
						<Link to="/play">
							<FontAwesomeIcon icon={faGamepad} />
							PlayGame
						</Link>
					</li>
					<li className="high-scores">
						<Link to="/high-scores">
							<FontAwesomeIcon icon={faChessKing} />
							High Scores
						</Link>
					</li>
					<li className="share">
						<button onClick={handleVisibility}>
							<FontAwesomeIcon icon={faHeart} />
							Share
						</button>
					</li>
				</ul>
			</nav>
			<Share isVisible={shareState.visible}/>
		</header>
	);
}

export default Header;
