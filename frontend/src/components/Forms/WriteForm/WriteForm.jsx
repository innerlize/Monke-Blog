import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from './WriteForm.module.scss';

const WriteForm = () => {
	const [value, setValue] = useState('');

	return (
		<form className={styles.form}>
			<div className={styles.leftContent}>
				<input type='text' name='title' placeholder='Title' />
				<div className={styles.quill_cont}>
					<ReactQuill
						className={styles.quill}
						theme='snow'
						value={value}
						onChange={setValue}
						placeholder='Description'
					/>
				</div>
			</div>

			<div className={styles.rightContent}>
				<div className={styles.file}>
					<label htmlFor='file'>Upload Image</label>
					<input type='file' id='file' />
				</div>

				<div className={styles.category}>
					<p>Category</p>
					<div className={styles.category_cont}>
						<div>
							<input type='radio' name='dog' id='dog' />
							<label htmlFor='dog'>Dog</label>
						</div>
						<div>
							<input type='radio' name='cat' id='cat' />
							<label htmlFor='cat'>Cat</label>
						</div>
						<div>
							<input type='radio' name='horse' id='horse' />
							<label htmlFor='horse'>Horse</label>
						</div>
						<div>
							<input type='radio' name='whale' id='whale' />
							<label htmlFor='whale'>Whale</label>
						</div>
						<div>
							<input type='radio' name='turtle' id='turtle' />
							<label htmlFor='turtle'>Turtle</label>
						</div>
					</div>
				</div>

				<div className={styles.saveState}>
					<p>Publish</p>

					<div className={styles.buttons_cont}>
						<button>Save as Draft</button>
						<button>Update Post</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default WriteForm;
