import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { handleNavMenu } from '../../api/api';
import styles from './Navbar.module.scss';

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<nav className={styles.nav}>
			<div className={styles.logo}>
				<img src={require('../../assets/images/logo_txt-hzl.png')} />
			</div>

			<div onClick={() => handleNavMenu(showMenu, setShowMenu)}>Hamb</div>

			<div className={styles.links_cont}>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/login'>Login</Link>
					</li>
					<li>
						<Link to='/login'>Post</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
