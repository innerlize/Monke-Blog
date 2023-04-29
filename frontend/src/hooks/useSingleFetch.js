import { useState, useEffect } from 'react';
import axios from 'axios';

function useSingleFetch(url, id) {
	const [post, setPost] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);

		axios
			.get(url + id)

			.then(({ data }) => {
				setPost(data[0]);
			})

			.catch(error => setError(error))

			.finally(() => setLoading(false));
	}, [id]);

	return { post, loading, error };
}

export default useSingleFetch;
