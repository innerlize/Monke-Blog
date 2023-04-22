import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Post.module.scss';

const Post = ({ post }) => {
	return (
		<div className={styles.post}>
			<Link className={styles.wrapper} to={`/post/${post.id}`}>
				<div className={styles.img}>
					<img src={post.img} />
				</div>

				<div className={styles.content}>
					<h3>{post.title}</h3>
					<p>Posted by Lulu</p>
					<p>2 days ago</p>
				</div>
			</Link>
		</div>
	);
};

export default Post;
