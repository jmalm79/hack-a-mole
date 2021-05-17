import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
	return (
		<footer className="footer">
			<span className="messed-up">
				<div>You messed up now A-A-ron</div>
			</span>
			<span className="github">
				View on{' '}
				<a
					class="nav-link"
					href="https://github.com/jmalm79/hack-a-mole"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub <FontAwesomeIcon icon={faGithub} />
				</a>
			</span>
		</footer>
	);
}

export default Footer;
