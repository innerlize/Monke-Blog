import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SidePost.module.scss';

const SidePost = ({ post }) => {
	return (
		<div className={styles.sidePost}>
			<Link>
				<img src={post.img} />
				<h4>{post.title}</h4>
				<p>Posted by Erica</p>
				<p>2 days ago</p>
			</Link>
		</div>
	);
};

export default SidePost;
