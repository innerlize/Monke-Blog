import React from 'react';
import Post from '../../components/Post/Post.jsx';
import useFetch from '../../hooks/useFetch.js';
import { useLocation } from 'react-router-dom';
import styles from './Home.module.scss';

const Home = () => {
	const category = useLocation().search;

	const { posts, loading, error } = useFetch(
		'https://monke-blog-production.up.railway.app/api/posts',
		category
	);

	console.log(posts);
	console.log(typeof posts);

	return (
		<section className={styles.section}>
			{loading && <p>Loading...</p>}

			{error && <p>Error! {error}</p>}

			{
				<article className={styles.posts_cont}>
					{posts?.map(post => {
						return <Post key={post.id} post={post} />;
					})}
				</article>
			}
		</section>
	);
};

export default Home;
