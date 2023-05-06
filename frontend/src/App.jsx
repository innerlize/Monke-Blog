import React from 'react';
import AuthContextProvider from './contexts/authContext.jsx';
import AppRouterProvider from './utils/providers/AppRouterProvider.jsx';
import './App.css';

function App() {
	return (
		<AuthContextProvider>
			<AppRouterProvider />
		</AuthContextProvider>
	);
}

export default App;
