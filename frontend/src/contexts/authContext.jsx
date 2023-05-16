import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(
		JSON.parse(localStorage.getItem('user')) || null
	);

	const login = async values => {
		const result = await axios.post(
			'https://monke-blog-production.up.railway.app/api/auth/login',
			values
		);
		setCurrentUser(result.data);
	};

	const logout = async () => {
		await axios.post(
			'https://monke-blog-production.up.railway.app/api/auth/logout'
		);
		setCurrentUser(null);
	};

	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(currentUser));
	}, [currentUser]);

	return (
		<AuthContext.Provider value={{ currentUser, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
