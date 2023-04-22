import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout.jsx';
import Home from '../../pages/Home/Home.jsx';
import About from '../../pages/About.jsx';
import Login from '../../pages/Login/Login.jsx';
import Register from '../../pages/Register/Register.jsx';
import Single from '../../pages/Single/Single.jsx';
import Write from '../../pages/Write/Write.jsx';
import ErrorPage from '../handlers/ErrorHandler.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '/', element: <Home /> },
			{
				path: '/about',
				element: <About />
			},
			{
				path: '/post/:id',
				element: <Single />
			},
			{
				path: '/write',
				element: <Write />
			}
		],
		errorElement: <ErrorPage />
	},
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '/register',
		element: <Register />
	}
]);

const AppRouterProvider = () => {
	return <RouterProvider router={router} />;
};

export default AppRouterProvider;
