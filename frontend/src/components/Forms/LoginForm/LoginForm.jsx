import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.scss';

const LoginForm = () => {
	return (
		<form className={styles.form}>
			<div className={styles.wrapper}>
				<input className={styles.mail} type='mail' placeholder='Mail' />
				<input
					className={styles.password}
					type='password'
					placeholder='Password'
				/>
			</div>

			<button className={styles.button} type='submit'>
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
