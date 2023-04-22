import React from 'react';
import Post from '../../components/Post/Post.jsx';
import posts from '../../tests/mocks/posts.js';
import styles from './Home.module.scss';

const Home = () => {
	return (
		<section className={styles.home}>
			<article className={styles.posts}>
				{posts?.map(post => {
					return <Post key={post.id} post={post} />;
				})}
			</article>
		</section>
	);
};

export default Home;
