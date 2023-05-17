import axios from 'axios';
import moment from 'moment';

export const handleChange = (e, setValues) => {
	setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
};

export const truncateText = (str, length, ending) => {
	let parsedString = textToHTML(str);

	if (length == null) {
		length = 100;
	}
	if (ending == null) {
		ending = '...';
	}
	if (parsedString.length > length) {
		return parsedString.substring(0, length - ending.length) + ending;
	} else {
		return parsedString;
	}
};

export const textToHTML = text => {
	const doc = new DOMParser().parseFromString(text, 'text/html');
	return doc.body.textContent;
};

export const handleLogin = async (
	e,
	values,
	setError,
	navigate,
	path,
	login
) => {
	e.preventDefault();

	try {
		await login(values);
		navigate(path);
	} catch (err) {
		console.log(err);
		setError(err);
	}
};

export const handleRegister = async (e, values, setError, navigate, path) => {
	e.preventDefault();

	try {
		await axios.post(process.env.REACT_APP_API_URL + 'auth/register', values);
		navigate(path);
	} catch (err) {
		console.log(err);
		setError(err);
	}
};

export const handleDelete = async (id, navigate, path) => {
	try {
		await axios.delete(process.env.REACT_APP_API_URL + 'posts/' + id, {
			withCredentials: true
		});
		navigate(path);
	} catch (err) {
		console.log(err);
	}
};

export const handlePublish = async (
	e,
	setError,
	file,
	state,
	values,
	navigate,
	path
) => {
	e.preventDefault();

	const { title, description, imgURL, category } = values;

	const filename = await handleUploadImage(e, file);

	try {
		state
			? await axios.put(
					process.env.REACT_APP_API_URL + 'posts/' + state.id,
					{
						title,
						description,
						img: file ? filename.data : imgURL,
						category
					},
					{ withCredentials: true }
			  )
			: await axios.post(
					process.env.REACT_APP_API_URL + 'posts',
					{
						title,
						description,
						img: file ? filename.data : imgURL,
						date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
						category
					},
					{ withCredentials: true }
			  );

		navigate(path);
	} catch (err) {
		setError(err);
	}
};

export const handleUploadImage = async (e, file) => {
	e.preventDefault();

	try {
		const formData = new FormData();
		formData.append('file', file);

		const response = await axios.post(
			process.env.REACT_APP_API_URL + 'upload',
			formData
		);
		return response;
	} catch (err) {
		console.log(err);
	}
};
