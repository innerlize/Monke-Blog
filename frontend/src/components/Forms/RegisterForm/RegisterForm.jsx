import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RegisterForm.module.scss';

const RegisterForm = () => {
	return (
		<form className={styles.form}>
			<div className={styles.wrapper}>
				<div className={styles.fullname_wrapper}>
					<input name='userName' type='text' placeholder='Name' />
					<input name='userLastName' type='text' placeholder='Lastname' />
				</div>
				<input name='userMail' type='mail' placeholder='Mail' />
				<input name='userPassword' type='password' placeholder='Password' />
			</div>

			<button className={styles.button} type='submit'>
				Register
			</button>

			<p>
				Already have an account? <Link to='/login'>Sign in!</Link>
			</p>
		</form>
	);
};

export default RegisterForm;
