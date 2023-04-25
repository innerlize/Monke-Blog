import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { handleChange, handleRegister } from '../../../api/api.js';
import styles from './RegisterForm.module.scss';

const RegisterForm = () => {
	const [inputs, setInputs] = useState({
		username: '',
		email: '',
		password: ''
	});

	const [error, setError] = useState(null);

	const navigate = useNavigate();

	return (
		<form className={styles.form}>
			<div className={styles.wrapper}>
				<div className={styles.fullname_wrapper}>
					<input
						name='username'
						type='text'
						placeholder='Username'
						onChange={e => handleChange(e, setInputs)}
					/>
					<input name='userLastName' type='text' placeholder='Lastname' />
				</div>
				<input
					name='email'
					type='mail'
					placeholder='Mail'
					onChange={e => handleChange(e, setInputs)}
				/>
				<input
					name='password'
					type='password'
					placeholder='Password'
					onChange={e => handleChange(e, setInputs)}
				/>
			</div>

			{error && <span style={{ color: 'red' }}>There is an error!</span>}

			<button
				className={styles.button}
				type='submit'
				onClick={e => handleRegister(e, inputs, setError, navigate, '/login')}>
				Register
			</button>

			<p>
				Already have an account? <Link to='/login'>Sign in!</Link>
			</p>
		</form>
	);
};

export default RegisterForm;
