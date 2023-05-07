import React from 'react';
import { Link } from 'react-router-dom';
import { truncateText } from '../../../api/api.js';
import moment from 'moment';
import styles from './SidePost.module.scss';

const SidePost = ({ post }) => {
	return (
		<Link
			className={styles.sidePost}
			to={`/post/${post.id}`}
			onClick={() => (document.documentElement.scrollTop = 0)}>
			<img
				src={
					post.img.includes('http://') || post.img.includes('https://')
						? post.img
						: '../uploads/' + post.img
				}
			/>

			<div className={styles.contentWrapper}>
				<h4>{post.title}</h4>
				<div>
					<p className={styles.desc}>{truncateText(post.description, 50)}</p>
					<p className={styles.date}>Posted {moment(post.date).fromNow()}</p>
				</div>
			</div>
		</Link>
	);
};

export default SidePost;
