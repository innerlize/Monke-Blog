import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { handlePublish } from '../../../api/api';
import { useLocation } from 'react-router-dom';

const WriteForm = () => {
	const state = useLocation().state;

	const [title, setTitle] = useState(state?.title || '');
	const [description, setDescription] = useState(state?.description || '');
	const [file, setFile] = useState(null);
	const [category, setCategory] = useState(state?.category || '');

	const values = {
		title,
		description,
		category
	};

	return (
		<form>
			<div>
				<input
					type='text'
					name='title'
					value={title}
					placeholder='Title'
					onChange={e => setTitle(e.target.value)}
				/>
				<div>
					<ReactQuill
						theme='snow'
						value={description}
						onChange={setDescription}
						placeholder='Description'
					/>
				</div>
			</div>

			<div>
				<div>
					<label htmlFor='file'>Upload Image</label>
					<input
						type='file'
						id='file'
						onChange={e => setFile(e.target.files[0])}
					/>
				</div>

				<div>
					<p>Category</p>
					<div>
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

				<div>
					<button onClick={e => handlePublish(e, file, state, values)}>
						Publish
					</button>

					<div>
						<button>Save as Draft</button>
						<button>Update Post</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default WriteForm;
