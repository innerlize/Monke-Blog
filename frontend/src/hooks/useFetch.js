import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url, category) {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);

		axios
			.get(url + category)

			.then(({ data }) => {
				setPosts(data);
			})

			.catch(error => setError(error))

			.finally(() => setLoading(false));
	}, [category]);

	return { posts, loading, error };
}

export default useFetch;
