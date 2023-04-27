import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const WriteForm = () => {
	const [value, setValue] = useState('');

	return (
		<form>
			<div>
				<input type='text' name='title' placeholder='Title' />
				<div>
					<ReactQuill
						theme='snow'
						value={value}
						onChange={setValue}
						placeholder='Description'
					/>
				</div>
			</div>

			<div>
				<div>
					<label htmlFor='file'>Upload Image</label>
					<input type='file' id='file' />
				</div>

				<div>
					<p>Category</p>
					<div>
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

				<div>
					<p>Publish</p>

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
