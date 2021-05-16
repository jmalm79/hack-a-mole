import React from 'react';
import './style.css';
import Share from '../../Share';
import Logo from '../../../images/logo.png';

function Header() {
	return (
		<header>
			<a href="#" className="logo">
				<img src={Logo} alt="This is heckles. Hes tired of your sh*t" />
			</a>
			<nav>
				<ul class="nav">
					<li class="play-game">
						<a href="#">PlayGame</a>
					</li>
					<li class="high-scores">
						<a href="#">High Scores</a>
					</li>
					<li class="share">
						<a href="#">Share</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
