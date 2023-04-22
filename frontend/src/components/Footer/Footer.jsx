import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<img
				className={styles.logo}
				src={require('../../assets/images/logo.png')}
			/>

			<p>
				Created and designed by{' '}
				<a
					className={styles.link}
					href='https://tiltedveggie.github.io/Alan-Aguilar/'>
					Alan
				</a>
			</p>
		</footer>
	);
};

export default Footer;
