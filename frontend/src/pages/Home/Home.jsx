import React from 'react';
import Post from '../../components/Post/Post.jsx';
import useFetch from '../../hooks/useFetch.js';
import { useLocation } from 'react-router-dom';

const Home = () => {
	const category = useLocation().search;

	const { posts, loading, error } = useFetch('/posts', category);

	return (
		<section>
			{loading && <p>Loading...</p>}

			{error && <p>Error! {error}</p>}

			{
				<article>
					{posts?.map(post => {
						return <Post key={post.id} post={post} />;
					})}
				</article>
			}
		</section>
	);
};

export default Home;
