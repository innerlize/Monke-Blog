import React from 'react';
import { Link } from 'react-router-dom';
import { truncateText } from '../../api/api.js';
import moment from 'moment';
import styles from './Post.module.scss';

const Post = ({ post }) => {
	return (
		<div className={styles.post}>
			<Link className={styles.wrapper} to={`/post/${post.id}`}>
				<div className={styles.img}>
					<img
						src={
							post.img.includes('http://') || post.img.includes('https://')
								? post.img
								: '../uploads/' + post.img
						}
					/>
				</div>

				<div className={styles.content}>
					<h3>{post.title}</h3>
					<p>
						{truncateText(post.description, screen.width < 1280 ? 50 : 250)}
					</p>
					<p>Posted {moment(post.date).fromNow()}</p>
					<p className={styles.read_more}>Read more</p>
				</div>
			</Link>
		</div>
	);
};

export default Post;
