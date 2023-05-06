import React from 'react';
import LoginForm from '../../components/Forms/LoginForm/LoginForm';
import styles from './Login.module.scss';

const Login = () => {
	return (
		<section className={styles.section}>
			<div>
				<h2>Login</h2>
				<LoginForm />
			</div>
		</section>
	);
};

export default Login;
