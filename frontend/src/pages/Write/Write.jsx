import React from 'react';
import WriteForm from '../../components/Forms/WriteForm/WriteForm';
import styles from './Write.module.scss';

const Write = () => {
	return (
		<section className={styles.section}>
			<WriteForm />
		</section>
	);
};

export default Write;
