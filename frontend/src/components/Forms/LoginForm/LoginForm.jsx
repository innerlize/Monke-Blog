import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { handleChange, handleLogin } from '../../../api/api.js';
import styles from './LoginForm.module.scss';

const LoginForm = () => {
	const [inputs, setInputs] = useState({
		username: '',
		password: ''
	});

	const [error, setError] = useState(null);

	const navigate = useNavigate('/');

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

			{error && <span style={{ color: 'red' }}>{error.response.data}</span>}

			<button
				className={styles.button}
				type='submit'
				onClick={e => handleLogin(e, inputs, setError, navigate, '/')}>
				Login
			</button>

			<p>
				Don&apos;t have an account?{' '}
				<Link className={styles.link} to='/register'>
					Sign up!
				</Link>
			</p>
		</form>
	);
};

export default LoginForm;
