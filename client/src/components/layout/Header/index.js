import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessKing, faHeart, faGamepad } from '@fortawesome/free-solid-svg-icons';
import Share from '../../Share';
import Logo from '../../../images/logo.png';

function Header() {
	return (
		<>
		<header>
			<a href="#" className="logo">
				<img src={Logo} alt="This is heckles the mascot; He's tired of your crap." />
				<span>This is Heckles; he's tired of your crap.</span>
			</a>
			<nav>
				<ul className="nav">
					<li className="play-game">
						<a href="#">
							<FontAwesomeIcon icon={faGamepad} />
							PlayGame
						</a>
					</li>
					<li className="high-scores">
						<a href="#">
							<FontAwesomeIcon icon={faChessKing} />
							High Scores
						</a>
					</li>
					<li className="share">
						<a href="#">
							<FontAwesomeIcon icon={faHeart} />
							Share
						</a>
					</li>
				</ul>
			</nav>
		</header>
		<div className="social"><Share /></div>
		</>
	);
}

export default Header;
