import axios from 'axios';

export const handleChange = (e, setValues) => {
	setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
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

export const handlePublish = async (e, file) => {
	e.preventDefault();

	handleUploadImage(file);
};

export const handleUploadImage = async file => {
	try {
		const formData = new FormData();
		formData.append('file', file);

		const response = await axios.post('/upload', formData);
		console.log(response);
	} catch (err) {
		console.log(err);
	}
};
