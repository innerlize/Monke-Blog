import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { handlePublish } from '../../../api/api';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './WriteForm.module.scss';

const WriteForm = () => {
	const state = useLocation().state;

	const [title, setTitle] = useState(state?.title || '');
	const [description, setDescription] = useState(state?.description || '');
	const [imgURL, setImgURL] = useState(null);
	const [file, setFile] = useState(null);
	const [category, setCategory] = useState(state?.category || '');

	const [error, setError] = useState();

	const values = {
		title,
		description,
		imgURL,
		category
	};

	const navigate = useNavigate();

	return (
		<form className={styles.form}>
			<div className={styles.left_content}>
				<div className={styles.title_cont}>
					<h4>Title</h4>
					<input
						type='text'
						name='title'
						value={title}
						placeholder='E.g.: Why are dogs awesome?'
						onChange={e => setTitle(e.target.value)}
					/>
				</div>

				<div className={styles.quill_cont}>
					<h4>Description</h4>
					<ReactQuill
						className={styles.quill}
						theme='snow'
						value={description}
						onChange={setDescription}
						placeholder='E.g.: Today we gonna explore the nature of dogs, because dogs are so funny and...'
					/>
				</div>
			</div>

			<div className={styles.right_content}>
				<div className={styles.file}>
					<h4>Image</h4>
					<input
						type='text'
						placeholder='E.g.: https://images.pexels.com/photos/1404727/pexels-photo-1404727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
						onChange={e => setImgURL(e.target.value)}
						disabled={file ? true : false}
					/>
					<p>Or</p>
					<label htmlFor='file'>Upload Image</label>
					<input
						type='file'
						id='file'
						onChange={e => setFile(e.target.files[0])}
						disabled={imgURL ? true : false}
					/>
					{file?.name && <p className={styles.selected_file}>{file.name}</p>}
				</div>

				<div className={styles.category}>
					<h4>Category</h4>

					<div className={styles.category_cont}>
						<div>
							<input
								type='radio'
								checked={category === 'pets'}
								value='pets'
								id='pets'
								onChange={e => setCategory(e.target.value)}
							/>
							<label htmlFor='pets'>Pets</label>
						</div>
						<div>
							<input
								type='radio'
								checked={category === 'wild-animals'}
								value='wild-animals'
								id='wild-animals'
								onChange={e => setCategory(e.target.value)}
							/>
							<label htmlFor='wild-animals'>Wild Animals</label>
						</div>
						<div>
							<input
								type='radio'
								checked={category === 'animal-care'}
								value='animal-care'
								id='animal-care'
								onChange={e => setCategory(e.target.value)}
							/>
							<label htmlFor='animal-care'>Animal Care</label>
						</div>
						<div>
							<input
								type='radio'
								checked={category === 'training'}
								value='training'
								id='training'
								onChange={e => setCategory(e.target.value)}
							/>
							<label htmlFor='training'>Training</label>
						</div>
						<div>
							<input
								type='radio'
								checked={category === 'tips-n-advices'}
								value='tips-n-advices'
								id='tips-n-advices'
								onChange={e => setCategory(e.target.value)}
							/>
							<label htmlFor='tips-n-advices'>Tips & Advices</label>
						</div>
					</div>
				</div>

				<div className={styles.publish}>
					{error && <span className={styles.error}>{error.response.data}</span>}

					<button
						onClick={e =>
							handlePublish(e, setError, file, state, values, navigate, '/')
						}>
						{state ? 'Update' : 'Publish'}
					</button>
				</div>
			</div>
		</form>
	);
};

export default WriteForm;
