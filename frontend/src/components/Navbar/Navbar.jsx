import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { Link } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react';
import styles from './Navbar.module.scss';

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);
	const { currentUser, logout } = useContext(AuthContext);

	return (
		<nav className={styles.nav}>
			<Link className={styles.logo} to='/'>
				<img src={require('../../assets/images/logo_txt-hzl.png')} />
			</Link>

			<Hamburger toggle={setIsActive} toggled={isActive} />

			<div
				onClick={() => setIsActive(!isActive)}
				className={isActive ? styles.links_cont_on : styles.links_cont_off}>
				<div className={styles.sub_cont}>
					<p>Pages</p>

					<div>
						<Link to='/'>Home</Link>

						<Link to='/about'>About</Link>

						<Link to='/write'>Post</Link>
					</div>
				</div>

				<div className={styles.sub_cont}>
					<p>Categories</p>

					<div>
						<Link to='/?category=pets'>Pets</Link>

						<Link to='/?category=wild-animals'>Wild Animals</Link>

						<Link to='/?category=animal-care'>Animal Care</Link>

						<Link to='/?category=training'>Training</Link>

						<Link to='/?category=tips-n-advices'>Tips & Advices</Link>
					</div>
				</div>

				<div className={styles.sub_cont}>
					<p>Account</p>

					<div>
						{!currentUser && (
							<>
								<Link to='/login'>Login</Link>
								<Link to='/register'>Register</Link>
							</>
						)}

						{currentUser && (
							<>
								<span className={styles.username}>
									Signed in as: <span>{currentUser.username}</span>
								</span>

								<Link onClick={() => logout()}>Logout</Link>
							</>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
