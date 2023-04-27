import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const { currentUser, logout } = useContext(AuthContext);

	return (
		<nav>
			<div>
				<img src={require('../../assets/images/logo_txt-hzl.png')} />
			</div>

			<div>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>

					<li>
						<Link to='/?category=pets'>Pets</Link>
					</li>

					<li>
						<Link to='/?category=wild%20animals'>Wild Animals</Link>
					</li>

					<li>
						<Link to='/?category=animal%20care'>Animal Care</Link>
					</li>

					<li>
						<Link to='/?category=training'>Training</Link>
					</li>

					<li>
						<Link to='/?category=tips%20and%20advices'>Tips & Advices</Link>
					</li>

					<li>
						<Link to='/about'>About</Link>
					</li>

					{currentUser?.username && <li> {currentUser.username} </li>}

					{currentUser ? (
						<Link onClick={() => logout()}>Logout</Link>
					) : (
						<Link to='/login'>Login</Link>
					)}

					<li>
						<Link>Post</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
