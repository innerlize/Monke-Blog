import React from 'react';
import { Link } from 'react-router-dom';
import { truncateText } from '../../api/api.js';
import moment from 'moment';

const Post = ({ post }) => {
	return (
		<div>
			<Link to={`/post/${post.id}`}>
				<div>
					<img src={'../uploads/' + post.img} width={300} />
				</div>

				<div>
					<h3>{post.title}</h3>
					<p>{truncateText(post.description, 50)}</p>
					<p>{moment(post.date).fromNow()}</p>
				</div>
			</Link>
		</div>
	);
};

export default Post;
