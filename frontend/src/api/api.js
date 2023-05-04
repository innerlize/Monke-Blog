import axios from 'axios';
import moment from 'moment';

export const handleChange = (e, setValues) => {
	setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
};

export const truncateText = (str, length, ending) => {
	if (length == null) {
		length = 100;
	}
	if (ending == null) {
		ending = '...';
	}
	if (str.length > length) {
		return str.substring(0, length - ending.length) + ending;
	} else {
		return str;
	}
};

export const handleLogin = async (
	e,
	values,
	setError,
	navigate,
	navigateTo,
	login
) => {
	e.preventDefault();

	try {
		await login(values);
		navigate(navigateTo);
	} catch (err) {
		console.log(err);
		setError(err);
	}
};

export const handleRegister = async (
	e,
	values,
	setError,
	navigate,
	navigateTo
) => {
	e.preventDefault();

	try {
		await axios.post('/auth/register', values);
		navigate(navigateTo);
	} catch (err) {
		console.log(err);
		setError(err);
	}
};

export const handleDelete = async (id, navigate, navigateTo) => {
	try {
		await axios.delete('/posts/' + id);
		navigate(navigateTo);
	} catch (err) {
		console.log(err);
	}
};

export const handlePublish = async (e, file, state, values) => {
	e.preventDefault();

	const imgUrl = await handleUploadImage(file);

	const { title, description, category } = values;

	try {
		state
			? await axios.put('/posts/' + state.id, {
					title,
					description,
					img: file ? imgUrl : '',
					category
			  })
			: await axios.post('/posts', {
					title,
					description,
					img: file ? imgUrl : '',
					date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
					category
			  });
	} catch (err) {
		console.log(err);
	}
};

export const handleUploadImage = async file => {
	try {
		const formData = new FormData();
		formData.append('file', file);

		const response = await axios.post('/upload', formData);
		return response.data;
	} catch (err) {
		console.log(err);
	}
};
