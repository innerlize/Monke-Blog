import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { handleChange, handleLogin } from '../../../api/api.js';
import { AuthContext } from '../../../contexts/authContext.jsx';
import styles from './LoginForm.module.scss';

const LoginForm = () => {
	const [inputs, setInputs] = useState({
		username: '',
		password: ''
	});

	const { login } = useContext(AuthContext);

	const [error, setError] = useState(null);

	const navigate = useNavigate();

	return (
		<form className={styles.form}>
			<div className={styles.wrapper}>
				<input
					name='username'
					type='text'
					placeholder='Username'
					onChange={e => handleChange(e, setInputs)}
				/>
				<input
					name='password'
					type='password'
					placeholder='Password'
					onChange={e => handleChange(e, setInputs)}
				/>
			</div>

			{error && <span className={styles.error}>{error.response.data}</span>}

			<button
				className={styles.button}
				type='submit'
				onClick={e => handleLogin(e, inputs, setError, navigate, '/', login)}>
				Login
			</button>

			<p>
				Don&apos;t have an account? <Link to='/register'>Sign up!</Link>
			</p>
		</form>
	);
};

export default LoginForm;
